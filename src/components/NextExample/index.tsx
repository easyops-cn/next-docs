import React, { useCallback, useEffect, useRef, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-yaml';
import 'prismjs/themes/prism.css';

export default function NextExample(): JSX.Element {
  const previewSrc = useBaseUrl('/preview/');
  const iframeRef = useRef<HTMLIFrameElement>();
  const [ready, setReady] = useState(false);

  const [code, setCode] = React.useState(
    `brick: strong\nproperties:\n  textContent: Hello Bricks!`
  );

  const handleIframeLoad = useCallback(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }
    (iframeRef.current.contentWindow as any)._preview_only_render(
      "yaml",
      {
        yaml: code,
      }
    );
  }, [ready, code]);

  return (
    <div>
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.yaml)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
      <iframe ref={iframeRef} src={previewSrc} onLoad={handleIframeLoad} />
    </div>
  );
}