import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";
import useDeferredValue from "@site/src/hooks/useDeferredValue";
import {
  EDITOR_PADDING_TOP,
  EDITOR_SCROLLBAR_SIZE,
  EXAMPLE_CODE_LINE_HEIGHT,
  EXAMPLE_IFRAME_MIN_HEIGHT,
  EXAMPLE_MIN_HEIGHT,
} from "@site/src/constants";
import type { FileInfo } from "@site/src/interfaces";
import LoadingRing from "../LoadingRing";
import { ContextHeroReady } from "../HomepageExamples";
import HeroEditor from "../HeroEditor";
import styles from "./styles.module.css";

export interface HeroExampleProps {
  file?: FileInfo;
  hiddenFiles?: Record<string, string>;
  expectBrick?: string;
  className?: string;
}

export default function HeroExample({
  file,
  hiddenFiles,
  expectBrick,
  className,
}: HeroExampleProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>();
  const { colorMode } = useColorMode();
  const previewSrc = useBaseUrl("/preview/");
  const iframeRef = useRef<HTMLIFrameElement>();
  const [iframeReady, setIframeReady] = useState(false);
  const [code, setCode] = useState(() =>
    file.codeSlides ? file.codeSlides[0] : file.code
  );
  const [codeLines, setCodeLines] = useState(() => getFileLines(file));
  const [contentMaxHeight, setContentMaxHeight] = useState(() =>
    getContentMaxHeight(codeLines)
  );
  const [expectBrickReady, setExpectBrickReady] = useState(!expectBrick);
  const { setHeroReady } = useContext(ContextHeroReady);

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
      setHeroReady(true);
    }
  }, [expectBrickReady, iframeReady, setHeroReady]);

  const deferredCode = useDeferredValue(code);

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
      [file.name]: deferredCode,
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
  }, [iframeReady, colorMode, deferredCode, hiddenFiles, file]);

  const handleCodeChange = useCallback(
    (code: string) => {
      setCode(code);
      if (!file.minLines) {
        setCodeLines(code.split("\n").length);
      }
    },
    [file]
  );

  useEffect(() => {
    setContentMaxHeight(getContentMaxHeight(codeLines));
  }, [codeLines]);

  const columnStyle = {
    height: Math.max(contentMaxHeight, EXAMPLE_MIN_HEIGHT),
  };

  return (
    <div className={clsx(styles.heroExample, className)} ref={containerRef}>
      <div className={styles.window}>
        <div className={styles.windowHeader}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.windowTitle}>Storyboard.yaml</div>
        </div>
        <div className={styles.editorPanel} style={columnStyle}>
          <HeroEditor
            file={file}
            theme={colorMode === "dark" ? "vs-dark" : "vs"}
            showLineNumbers
            typingEffectReady={iframeReady && expectBrickReady}
            className={styles.editorContainer}
            onChange={handleCodeChange}
          />
        </div>
      </div>
      <div className={clsx(styles.previewPanel)}>
        <div className={styles.preview}>
          <iframe
            ref={iframeRef}
            src={previewSrc}
            loading="lazy"
            onLoad={handleIframeLoad}
            className={clsx({
              [styles.ready]: iframeReady && expectBrickReady,
            })}
          />
        </div>
        {!(iframeReady && expectBrickReady) && <LoadingRing />}
      </div>
    </div>
  );
}

function getContentMaxHeight(codeLines: number): number {
  const codeHeight =
    codeLines * EXAMPLE_CODE_LINE_HEIGHT +
    EDITOR_SCROLLBAR_SIZE +
    EDITOR_PADDING_TOP;
  return codeHeight;
}

function getFileLines(file: FileInfo): number {
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
