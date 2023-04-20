import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDeferredValue from '@site/src/hooks/useDeferredValue';
import clsx from 'clsx';
import type { FileInfo } from '../MonacoEditorWorkspace';
import styles from './styles.module.css';

export interface NextExampleProps {
  files: FileInfo[];
  defaultFile?: string;
}

const MIN_HEIGHT = 32;

export default function NextExample({ files, defaultFile }: NextExampleProps): JSX.Element {
  const {colorMode} = useColorMode();
  const previewSrc = useBaseUrl('/preview/');
  const iframeRef = useRef<HTMLIFrameElement>();
  const [iframeHeight, setIframeHeight] = useState(MIN_HEIGHT);
  const [ready, setReady] = useState(false);
  const [currentFile, setCurrentFile] = useState(() => defaultFile ?? files[0].name);

  const handleIframeLoad = useCallback(() => {
    setReady(true);
  }, []);

  const [codeByFile, setCodeByFile] = useState<Record<string, string>>(() => Object.fromEntries(files.map(f => [f.name, f.code])));

  const deferredBricks = useDeferredValue(codeByFile.Bricks);
  const deferredContext = useDeferredValue(codeByFile.Context);
  const deferredFunctions = useDeferredValue(codeByFile.Functions);
  const deferredTemplates = useDeferredValue(codeByFile.Templates);
  const deferredI18n = useDeferredValue(codeByFile.I18N);

  useEffect(() => {
    if (!ready) {
      return;
    }
    (iframeRef.current.contentWindow as any)._preview_only_render(
      "yaml",
      {
        yaml: deferredBricks,
      },
      {
        theme: colorMode,
        context: deferredContext,
        functions: deferredFunctions,
        templates: deferredTemplates,
        i18n: deferredI18n,
      }
    );
  }, [ready, deferredBricks, deferredContext, deferredFunctions, deferredTemplates, deferredI18n, colorMode]);

  useEffect(() => {
    if (!ready) {
      return;
    }
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setIframeHeight(Math.max(MIN_HEIGHT, entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height));
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
  }, []);

  return (
    <div className={styles.example}>
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
        <div className={styles.editorColumn}>
          <BrowserOnly>
            {() => {
              const MonacoEditorWorkspace = require("../MonacoEditorWorkspace").default;
              return (
                <MonacoEditorWorkspace
                  files={files}
                  currentFile={currentFile}
                  theme={colorMode === 'dark' ? 'vs-dark' : 'vs-light'}
                  className={styles.editorContainer}
                  onChange={handleCodeChange}
                />
              )
            }}
          </BrowserOnly>
        </div>
        <div className={styles.previewColumn}>
          <div className={styles.preview}>
            <iframe ref={iframeRef} src={previewSrc} onLoad={handleIframeLoad} style={{height: iframeHeight}} />
          </div>
        </div>
      </div>
    </div>
  );
}