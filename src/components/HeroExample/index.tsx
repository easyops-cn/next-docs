import React, { useCallback, useEffect, useRef, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";
import useDeferredValue from "@site/src/hooks/useDeferredValue";
import {
  EDITOR_PADDING_TOP,
  EDITOR_SCROLLBAR_SIZE,
  EXAMPLE_CODE_LINE_HEIGHT,
  EXAMPLE_IFRAME_MARGIN,
  EXAMPLE_IFRAME_MIN_HEIGHT,
  EXAMPLE_MIN_HEIGHT,
} from "@site/src/constants";
import type { FileInfo } from "@site/src/interfaces";
import LoadingRing from "../LoadingRing";
import SimpleEditorWorkspace from "../SimpleEditorWorkspace";
import styles from "./styles.module.css";

export interface HeroExampleProps {
  files: FileInfo[];
  hiddenFiles?: Record<string, string>;
  expectBrick?: string;
  className?: string;
  onReady?(): void;
}

export default function HeroExample({
  files,
  hiddenFiles,
  expectBrick,
  className,
  onReady,
}: HeroExampleProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>();
  const { colorMode } = useColorMode();
  const previewSrc = useBaseUrl("/preview/");
  const iframeRef = useRef<HTMLIFrameElement>();
  const [iframeHeight, setIframeHeight] = useState(EXAMPLE_IFRAME_MIN_HEIGHT);
  const [iframeReady, setIframeReady] = useState(false);
  const [currentFile, setCurrentFile] = useState(
    () => (files.find((f) => f.defaultActive) ?? files[0]).name
  );
  const [codeLines, setCodeLines] = useState(() =>
    getCodeLines(files, currentFile)
  );
  const [contentMaxHeight, setContentMaxHeight] = useState(() =>
    getContentMaxHeight(codeLines, iframeHeight)
  );
  const [expectBrickReady, setExpectBrickReady] = useState(!expectBrick);

  const handleIframeLoad = useCallback(() => {
    const check = () => {
      if ((iframeRef.current?.contentWindow as any)?._preview_only_render) {
        setIframeReady(true);
        // Set iframe visible only after the expected brick appears.
        if (expectBrick) {
          const iframeDocument = iframeRef.current.contentDocument;
          if (iframeDocument.querySelector(expectBrick)) {
            setExpectBrickReady(true);
          } else {
            const observer = new MutationObserver(() => {
              if (iframeDocument.querySelector(expectBrick)) {
                setExpectBrickReady(true);
                observer.disconnect();
              }
            });
            observer.observe(iframeDocument.body, {
              subtree: true,
              childList: true,
            });
          }
        }
      } else {
        setTimeout(check, 100);
      }
    };
    check();
  }, [expectBrick]);

  useEffect(() => {
    if (iframeReady && expectBrickReady) {
      onReady?.();
    }
  }, [expectBrickReady, onReady, iframeReady]);

  const [codeByFile, setCodeByFile] = useState<Record<string, string>>(() =>
    Object.fromEntries(files.map((f) => [f.name, f.codeSlides?.[0] ?? f.code]))
  );

  const deferredFiles = useDeferredValue(codeByFile);

  useEffect(() => {
    if (!iframeReady) {
      return;
    }
    const render = (iframeRef.current?.contentWindow as any)
      ?._preview_only_render;
    if (!render) {
      return;
    }
    const {
      Bricks,
      Context,
      Functions,
      Templates,
      I18N,
      Style,
      templatesAreArrayOfYaml,
    } = getNormalizedFiles({
      ...hiddenFiles,
      ...deferredFiles,
    });
    render(
      "yaml",
      {
        yaml: Bricks,
      },
      {
        theme: colorMode,
        context: Context,
        functions: Functions,
        templates: Templates,
        i18n: I18N,
        styleText: Style,
        templatesAreArrayOfYaml: templatesAreArrayOfYaml,
      }
    );
  }, [iframeReady, colorMode, deferredFiles, hiddenFiles]);

  useEffect(() => {
    if (!iframeReady) {
      return;
    }
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setIframeHeight(
          Math.max(
            EXAMPLE_IFRAME_MIN_HEIGHT,
            entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height
          )
        );
      }
    });
    ro.observe(iframeRef.current.contentDocument.body, {
      box: "border-box",
    });
    return () => {
      ro.disconnect();
    };
  }, [iframeReady]);

  const handleCodeChange = useCallback(
    (code: string, filename: string) => {
      setCodeByFile((prev) => ({
        ...prev,
        [filename]: code,
      }));
      const file = getFile(files, filename);
      if (!file.minLines) {
        setCodeLines(code.split("\n").length);
      }
    },
    [files]
  );

  useEffect(() => {
    setCodeLines(getCodeLines(files, currentFile));
  }, [files, currentFile]);

  useEffect(() => {
    setContentMaxHeight(getContentMaxHeight(codeLines, iframeHeight));
  }, [codeLines, iframeHeight]);

  const columnStyle = {
    height: Math.max(contentMaxHeight, EXAMPLE_MIN_HEIGHT),
  };

  return (
    <div
      className={clsx(styles.example, className, styles.condensed)}
      ref={containerRef}
    >
      <div className={styles.tabs}>
        {files.map((file) => (
          <button
            className={clsx(styles.tab, {
              [styles.active]: file.name === currentFile,
            })}
            key={file.name}
            onClick={() => {
              setCurrentFile(file.name);
            }}
          >
            {file.name === "Bricks" ? "Storyboard" : file.name}
          </button>
        ))}
      </div>
      <div className={styles.editorColumn} style={columnStyle}>
        <SimpleEditorWorkspace
          files={files}
          currentFile={currentFile}
          theme={colorMode === "dark" ? "vs-dark" : "vs"}
          showLineNumbers
          typingEffectReady={iframeReady && expectBrickReady}
          className={styles.editorContainer}
          onChange={handleCodeChange}
        />
      </div>
      <div
        className={clsx(styles.previewColumn, styles.collapsed)}
        style={{
          padding: EXAMPLE_IFRAME_MARGIN,
        }}
      >
        {
          <div
            className={clsx(styles.preview, {
              [styles.ready]: iframeReady && expectBrickReady,
            })}
          >
            <iframe
              ref={iframeRef}
              src={previewSrc}
              loading="lazy"
              onLoad={handleIframeLoad}
              style={{ height: iframeHeight }}
            />
          </div>
        }
        {!(iframeReady && expectBrickReady) && <LoadingRing />}
      </div>
    </div>
  );
}

function getContentMaxHeight(codeLines: number, iframeHeight: number): number {
  const previewHeight = iframeHeight + EXAMPLE_IFRAME_MARGIN * 2;
  const codeHeight =
    codeLines * EXAMPLE_CODE_LINE_HEIGHT +
    EDITOR_SCROLLBAR_SIZE +
    EDITOR_PADDING_TOP;
  return Math.max(previewHeight, codeHeight);
}

function getFile(files: FileInfo[], currentFile: string) {
  return files.find((f) => f.name === currentFile);
}

function getCodeLines(files: FileInfo[], currentFile: string): number {
  const file = getFile(files, currentFile);
  return file.minLines ?? file.code.split("\n").length;
}

interface StoryboardFunction {
  name: string;
  source: string;
  typescript?: boolean;
}

interface YamlTemplate {
  name: string;
  yaml: string;
}

function getNormalizedFiles(files: Record<string, string>) {
  const normalized: Record<string, unknown> = {};
  const functions: StoryboardFunction[] = [];
  const templates: YamlTemplate[] = [];
  for (const [filename, content] of Object.entries(files)) {
    if (filename.startsWith("Functions/")) {
      const [fnName, ext] = filename.split("/")[1].split(".");
      functions.push({
        name: fnName,
        source: content,
        typescript: ext === "ts",
      });
    } else if (filename.startsWith("tpl-")) {
      templates.push({
        name: filename,
        yaml: content,
      });
    } else if (filename === "style.css") {
      normalized.Style = content;
    } else {
      normalized[filename] = content;
    }
  }
  if (functions.length > 0) {
    normalized.Functions = functions;
  }
  if (templates.length > 0) {
    normalized.Templates = templates;
    normalized.templatesAreArrayOfYaml = true;
  }
  return normalized;
}
