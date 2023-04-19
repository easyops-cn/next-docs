import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';
import useDeferredValue from '@site/src/hooks/useDeferredValue';
import FileTabs, { FileInfo } from '@site/src/components/FileTabs';
import styles from './styles.module.css';

export interface NextExampleProps {
  files: FileInfo[];
}

export default function NextExample({ files }: NextExampleProps): JSX.Element {
  const {colorMode} = useColorMode();
  const previewSrc = useBaseUrl('/preview/');
  const iframeRef = useRef<HTMLIFrameElement>();
  const [ready, setReady] = useState(false);

  const handleIframeLoad = useCallback(() => {
    setReady(true);
  }, []);

  const [codeByFile, setCodeByFile] = useState<Record<string, string>>({});

  const deferredBricks = useDeferredValue(codeByFile.Bricks);
  const deferredContext = useDeferredValue(codeByFile.Context);

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
      }
    );
  }, [ready, deferredBricks, deferredContext, colorMode]);

  return (
    <div className={styles.example}>
      <FileTabs
        files={files}
        activeFile="Bricks"
        onChange={setCodeByFile}
      />
      <iframe ref={iframeRef} src={previewSrc} onLoad={handleIframeLoad} />
    </div>
  );
}