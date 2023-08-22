import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import {
  EDITOR_SCROLLBAR_SIZE,
  EDITOR_PADDING_TOP,
  EXAMPLE_CODE_LINE_HEIGHT,
} from "@site/src/constants";
import clsx from "clsx";
import type { FileInfo } from "@site/src/interfaces";
import { register as registerJavaScript } from "@next-core/monaco-contributions/javascript";
import { register as registerTypeScript } from "@next-core/monaco-contributions/typescript";
import { register as registerYaml } from "@next-core/monaco-contributions/yaml";
import styles from "./styles.module.css";

registerJavaScript(monaco);
registerTypeScript(monaco);
registerYaml(monaco);

export interface MonacoEditorWorkspaceProps {
  files: FileInfo[];
  currentFile: string;
  theme?: string;
  className?: string;
  typingEffectReady?: boolean;
  onChange?(value: string, filename: string): void;
}

export interface MonacoEditorWorkspaceRef {
  resetScrollTop(): void;
}

enum SlideStatus {
  None,
  Active,
  Finished,
}

let count = 0;
function uniqueId(prefix: string) {
  return `${prefix}${++count}`;
}

monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
  allowNonTsExtensions: true,
  lib: [],
});
monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
  allowNonTsExtensions: true,
  lib: [],
});

export default forwardRef<MonacoEditorWorkspaceRef, MonacoEditorWorkspaceProps>(
  function MonacoEditorWorkspace(
    { files, currentFile, className, theme, typingEffectReady, onChange },
    ref
  ): JSX.Element {
    const containerRef = useRef<HTMLDivElement>();
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
    const modelsMap = useMemo(
      () => new Map<string, monaco.editor.ITextModel>(),
      []
    );
    const workspace = useMemo(() => uniqueId("workspace/"), []);
    const [slideStatus, setSlideStatus] = useState<SlideStatus>(
      SlideStatus.None
    );
    const changedFiles = useMemo(() => new Set<string>(), []);

    const currentModel = useMemo(() => {
      let model = modelsMap.get(currentFile);
      if (!model) {
        const file = files.find((f) => f.name === currentFile);
        model = monaco.editor.createModel(
          file.codeSlides?.[0] ?? file.code,
          file.lang ?? "yaml",
          monaco.Uri.file(`${workspace}/${file.name}`)
        );
        modelsMap.set(currentFile, model);
      }
      return model;
    }, [currentFile, modelsMap, files, workspace]);

    useEffect(() => {
      if (theme) {
        // Currently theme is configured globally.
        // See https://github.com/microsoft/monaco-editor/issues/338
        monaco.editor.setTheme(theme);
      }
    }, [theme]);

    useEffect(() => {
      if (editorRef.current) {
        editorRef.current.setModel(currentModel);
      } else {
        editorRef.current = monaco.editor.create(containerRef.current, {
          model: currentModel,
          minimap: {
            enabled: false,
          },
          scrollBeyondLastLine: false,
          tabSize: 2,
          insertSpaces: true,
          automaticLayout: true,
          fontSize: 13,
          lineHeight: EXAMPLE_CODE_LINE_HEIGHT,
          scrollbar: {
            horizontalScrollbarSize: EDITOR_SCROLLBAR_SIZE,
            verticalScrollbarSize: EDITOR_SCROLLBAR_SIZE,
            horizontalSliderSize: 8,
            verticalSliderSize: 8,
            alwaysConsumeMouseWheel: false,
          },
          padding: {
            top: EDITOR_PADDING_TOP,
          },
          overviewRulerBorder: false,
          mouseWheelScrollSensitivity: 0.5,
          renderLineHighlight: "none",
        });

        // Monaco editor will stop keyboard event propagation, thus the
        // search-bar shortcut won't work, so we manually dispatch an event.
        editorRef.current.onKeyDown((e) => {
          if (e.equals(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK)) {
            const keydown = new KeyboardEvent("keydown", {
              ctrlKey: e.ctrlKey,
              metaKey: e.metaKey,
              key: "k",
            });
            document.dispatchEvent(keydown);
          }
        });
      }
    }, [currentModel]);

    const decorationsRef = useRef<monaco.editor.IEditorDecorationsCollection>();

    useEffect(() => {
      if (changedFiles.has(currentFile)) {
        // Do not create decorations if the file content has been changed.
        return;
      }
      const file = files.find((f) => f.name === currentFile);
      if (file.highlightRanges) {
        editorRef.current?.revealLineNearTop(
          file.highlightRanges[0][0],
          monaco.editor.ScrollType.Immediate
        );
        decorationsRef.current = editorRef.current?.createDecorationsCollection(
          file.highlightRanges.map(([start, end, type]) => ({
            range: new monaco.Range(start, 1, end, 1),
            options: {
              isWholeLine: true,
              linesDecorationsClassName:
                type === "modified" ? styles.modified : styles.added,
            },
          }))
        );
      }
    }, [changedFiles, currentFile, files]);

    useImperativeHandle(
      ref,
      () => ({
        resetScrollTop() {
          return editorRef.current.setScrollTop(
            0,
            monaco.editor.ScrollType.Immediate
          );
        },
      }),
      []
    );

    useEffect(() => {
      const listener = currentModel.onDidChangeContent(() => {
        // Clear the decorations once the file content is changed.
        decorationsRef.current?.clear();
        changedFiles.add(currentFile);
        onChange?.(currentModel.getValue(), currentFile);
      });
      return () => {
        listener.dispose();
      };
    }, [changedFiles, currentFile, currentModel, onChange]);

    useEffect(() => {
      const file = files.find((f) => f.name === currentFile);
      if (file.codeSlides && typingEffectReady) {
        editorRef.current.focus();
        setSlideStatus(SlideStatus.Active);
        const cursorDecoration =
          editorRef.current.createDecorationsCollection();
        performTypingEffect(
          file.codeSlides,
          currentModel,
          cursorDecoration
        ).then(() => {
          cursorDecoration.set([]);
          editorRef.current.setPosition(getLastPosition(currentModel));
          setSlideStatus(SlideStatus.Finished);
        });
      }
    }, [currentFile, currentModel, files, typingEffectReady]);

    useEffect(() => {
      switch (slideStatus) {
        case SlideStatus.Active:
          editorRef.current.updateOptions({
            readOnly: true,
            domReadOnly: true,
          });
          break;
        case SlideStatus.Finished:
          editorRef.current.updateOptions({
            readOnly: false,
            domReadOnly: false,
          });
      }
    }, [slideStatus]);

    useEffect(() => {
      return () => {
        editorRef.current.dispose();
        for (const model of modelsMap.values()) {
          model.dispose();
        }
      };
    }, []);

    return (
      <div
        ref={containerRef}
        className={clsx(className, {
          [styles.slidesActive]: slideStatus === SlideStatus.Active,
        })}
      ></div>
    );
  }
);

async function performTypingEffect(
  codeSlides: string[],
  model: monaco.editor.ITextModel,
  cursorDecoration: monaco.editor.IEditorDecorationsCollection
) {
  return new Promise<void>((resolve) => {
    const transitions = getTransitions(codeSlides);
    let i = 0;
    const run = function () {
      const text = transitions[i] as string;
      const { lineNumber, column } = getLastPosition(model);
      const range = new monaco.Range(lineNumber, column, lineNumber, column);
      model.applyEdits([{ range, text }]);
      updateCursorDecoration();

      const delay = transitions[++i] as number;
      if (delay) {
        i++;
        setTimeout(run, delay);
      } else {
        setTimeout(resolve, 1000);
      }
    };
    const updateCursorDecoration = function () {
      const { lineNumber, column } = getLastPosition(model);
      cursorDecoration.set([
        {
          range: {
            startLineNumber: lineNumber,
            startColumn: column,
            endLineNumber: lineNumber,
            endColumn: column,
          },
          options: {
            afterContentClassName: styles.cursor,
          },
        },
      ]);
    };

    updateCursorDecoration();
    setTimeout(run, 2000);
  });
}

function getLastPosition(model: monaco.editor.ITextModel) {
  const lineNumber = model.getLineCount();
  const column = model.getLineLength(lineNumber) + 1;
  return { lineNumber, column };
}

function getTransitions(codeSlides: string[]) {
  return transitionJoin(
    codeSlides.slice(1).map((line) => transitionJoin(line.split(""), 20)),
    1000
  );
}

type TransitionItem = string | number;

function transitionJoin(
  array: unknown[],
  ...joins: TransitionItem[]
): TransitionItem[] {
  const result = [];
  let i = 0;
  while (i < array.length) {
    const parts = [].concat(array[i]).flat(Infinity);
    result.push(...parts);
    i++;
    if (i < array.length && parts.length > 0) {
      result.push(...joins);
    }
  }
  return result;
}
