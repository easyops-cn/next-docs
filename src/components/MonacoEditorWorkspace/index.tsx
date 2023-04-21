import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { EDITOR_SCROLLBAR_SIZE, EDITOR_PADDING_TOP, EXAMPLE_CODE_LINE_HEIGHT } from '@site/src/constants';
import "./register";
import styles from "./styles.module.css";

export interface MonacoEditorWorkspaceProps {
  files: FileInfo[];
  currentFile: string;
  theme?: string;
  className?: string;
  onChange?(value: string, filename: string): void;
}

export interface FileInfo {
  name: string;
  code: string;
  lang?: string;
}

export interface MonacoEditorWorkspaceRef {
  resetScrollTop(): void;
}

let count = 0;
function uniqueId(prefix: string) {
  return `${prefix}${++count}`;
}

export default forwardRef<MonacoEditorWorkspaceRef, MonacoEditorWorkspaceProps>(function MonacoEditorWorkspace({
  files,
  currentFile,
  className,
  theme,
  onChange,
}, ref): JSX.Element {
  const containerRef = useRef<HTMLDivElement>();
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const modelsMap = useMemo(() => new Map<string, monaco.editor.ITextModel>(), []);
  const workspace = useMemo(() => uniqueId('workspace/'), []);

  const currentModel = useMemo(() => {
    let model = modelsMap.get(currentFile);
    if (!model) {
      const file = files.find(f => f.name === currentFile);
      model = monaco.editor.createModel(
        file.code,
        file.lang ?? "nextYaml",
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
      editorRef.current = monaco.editor.create(
        containerRef.current,
        {
          model: currentModel,
          theme,
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
          extraEditorClassName: styles.editor,
          mouseWheelScrollSensitivity: 0.5,
        }
      );
    }
  }, [currentModel]);

  useImperativeHandle(ref, () => ({
    resetScrollTop() {
      return editorRef.current.setScrollTop(0, monaco.editor.ScrollType.Immediate);
    },
  }), []);

  useEffect(() => {
    const listener = currentModel.onDidChangeContent(() => {
      onChange?.(currentModel.getValue(), currentFile);
    });
    return () => {
      listener.dispose();
    };
  }, [currentModel, onChange]);

  useEffect(() => {
    return () => {
      editorRef.current.dispose();
      for (const model of modelsMap.values()) {
        model.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className={className}></div>
});
