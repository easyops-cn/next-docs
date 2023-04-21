import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import useDeferredValue from '@site/src/hooks/useDeferredValue';
import { EDITOR_PADDING_TOP, EDITOR_SCROLLBAR_SIZE, EXAMPLE_CODE_LINE_HEIGHT, EXAMPLE_HEIGHT_THRESHOLD, EXAMPLE_IFRAME_MARGIN, EXAMPLE_IFRAME_MIN_HEIGHT } from '@site/src/constants';
import ChevronUp from "./chevron-up.svg";
import ChevronDown from "./chevron-Down.svg";
import type { default as MonacoEditorWorkspaceType, FileInfo, MonacoEditorWorkspaceRef } from '../MonacoEditorWorkspace';
import LoadingRing from '../LoadingRing';
import styles from './styles.module.css';

export interface NextExampleProps {
  files: FileInfo[];
  defaultFile?: string;
}

export default function NextExample({ files, defaultFile }: NextExampleProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>();
  const editorRef = useRef<MonacoEditorWorkspaceRef>();
  const {colorMode} = useColorMode();
  const previewSrc = useBaseUrl('/preview/');
  const iframeRef = useRef<HTMLIFrameElement>();
  const [iframeHeight, setIframeHeight] = useState(EXAMPLE_IFRAME_MIN_HEIGHT);
  const [ready, setReady] = useState(false);
  const [currentFile, setCurrentFile] = useState(() => defaultFile ?? files[0].name);
  const [codeLines, setCodeLines] = useState(() => getCodeLines(files, currentFile));
  const [contentMaxHeight, setContentMaxHeight] = useState(() => getContentMaxHeight(codeLines, iframeHeight));
  const [expanded, setExpanded] = useState(false);

  const handleIframeLoad = useCallback(() => {
    setReady(true);
  }, []);

  const [codeByFile, setCodeByFile] = useState<Record<string, string>>(() => Object.fromEntries(files.map(f => [f.name, f.code])));

  const deferredFiles = useDeferredValue(codeByFile);

  useEffect(() => {
    if (!ready) {
      return;
    }
    const normalized = getNormalizedFiles(deferredFiles);
    (iframeRef.current.contentWindow as any)._preview_only_render(
      "yaml",
      {
        yaml: normalized.Bricks,
      },
      {
        theme: colorMode,
        context: normalized.Context,
        functions: normalized.Functions,
        templates: normalized.Templates,
        i18n: normalized.I18N,
      }
    );
  }, [ready, colorMode, deferredFiles]);

  useEffect(() => {
    if (!ready) {
      return;
    }
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setIframeHeight(Math.max(EXAMPLE_IFRAME_MIN_HEIGHT, entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height));
      }
    });
    ro.observe(iframeRef.current.contentDocument.body, {
      box: "border-box"
    });
    return () => {
      ro.disconnect();
    };
  }, [ready]);

  const handleCodeChange = useCallback((code: string, filename: string) => {
    setCodeByFile((prev) => ({
      ...prev,
      [filename]: code,
    }));
    setCodeLines(code.split("\n").length);
  }, []);

  useEffect(() => {
    setCodeLines(getCodeLines(files, currentFile));
  }, [files, currentFile]);

  useEffect(() => {
    setContentMaxHeight(getContentMaxHeight(codeLines, iframeHeight));
  }, [codeLines, iframeHeight]);

  const toggleShowMore = useCallback(() => {
    const nextExpanded = !expanded;
    flushSync(() => {
      setExpanded(nextExpanded);
    });
    if (!nextExpanded) {
      editorRef.current.resetScrollTop();
      // @ts-ignore
      if (containerRef.current.scrollIntoViewIfNeeded) {
        // @ts-ignore
        containerRef.current.scrollIntoViewIfNeeded();
      } else {
        containerRef.current.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    }
  }, [expanded]);

  const overflowed = contentMaxHeight > EXAMPLE_HEIGHT_THRESHOLD;
  const columnStyle = {
    height: overflowed && !expanded ? EXAMPLE_HEIGHT_THRESHOLD : contentMaxHeight,
  };

  return (
    <div className={styles.example} ref={containerRef}>
      <div className={styles.tabs}>
        {
          files.map(file => (
            <div className={clsx(styles.tab, {[styles.active]: file.name === currentFile})} key={file.name} onClick={() => {
              setCurrentFile(file.name);
            }}>{file.name}</div>
          ))
        }
      </div>
      <div className={styles.editorAndPreview}>
        <div className={styles.editorColumn} style={columnStyle}>
          <BrowserOnly fallback={<LoadingRing />}>
            {() => {
              const MonacoEditorWorkspace = require("../MonacoEditorWorkspace").default as typeof MonacoEditorWorkspaceType;
              return (
                <MonacoEditorWorkspace
                  files={files}
                  currentFile={currentFile}
                  theme={colorMode === 'dark' ? 'vs-dark' : 'vs'}
                  className={styles.editorContainer}
                  onChange={handleCodeChange}
                  ref={editorRef}
                />
              );
            }}
          </BrowserOnly>
        </div>
        <div className={clsx(styles.previewColumn, expanded ? styles.showMore : styles.showLess)} style={columnStyle}>
          <div className={clsx(styles.preview, { [styles.ready]: ready })}>
            <iframe ref={iframeRef} src={previewSrc} onLoad={handleIframeLoad} style={{height: iframeHeight}} />
          </div>
          { !ready && <LoadingRing /> }
        </div>
      </div>
      {
        overflowed && (
          <div className={styles.buttonToggleShowMore} role="button" onClick={toggleShowMore}>
            { expanded ? <ChevronUp /> : <ChevronDown /> }
            <span>{ expanded ? "Show less" : "Show more" }</span>
          </div>
        )
      }
    </div>
  );
}

function getContentMaxHeight(codeLines: number, iframeHeight: number): number {
  const previewHeight = iframeHeight + EXAMPLE_IFRAME_MARGIN;
  const codeHeight = codeLines * EXAMPLE_CODE_LINE_HEIGHT + EDITOR_SCROLLBAR_SIZE + EDITOR_PADDING_TOP;
  return Math.max(previewHeight, codeHeight);
}

function getCodeLines(files: FileInfo[], currentFile: string): number {
  return files.find(file => file.name === currentFile).code.split("\n").length;
}

interface StoryboardFunction {
  name: string;
  source: string;
  typescript?: boolean;
}

function getNormalizedFiles(files: Record<string, string>) {
  const normalized: Record<string, unknown> = {};
  const functions: StoryboardFunction[] = [];
  for (const [filename, content] of Object.entries(files)) {
    if (filename.startsWith("Functions/")) {
      const [fnName, ext] = filename.split("/")[1].split(".");
      functions.push({
        name: fnName,
        source: content,
        typescript: ext === "ts",
      });
    } else {
      normalized[filename] = content;
    }
  }
  if (functions.length > 0) {
    normalized.Functions = functions;
  }
  return normalized;
}