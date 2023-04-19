import React, { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import {
  SlTabGroup,
  SlTab,
  SlTabPanel,
} from '@shoelace-style/shoelace/dist/react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-yaml';
import 'prismjs/themes/prism.css';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';

export interface FileTabsProps {
  files: FileInfo[];
  activeFile: string;
  onChange?: (codeByFile: Record<string, string>) => void;
}

export interface FileInfo {
  name: string;
  code: string;
}

export default function FileTabs({ files, activeFile, onChange } : FileTabsProps): JSX.Element {
  const [codeByFile, setCodeByFile] = useState<Record<string, string>>(
    () => Object.fromEntries(files.map(f => [f.name, f.code]))
  );
  const [activePanel, setActivePanel] = useState<string>(activeFile);

  useEffect(() => {
    onChange?.(codeByFile);
  }, [onChange, codeByFile]);

  useEffect(() => {
    setActivePanel(activeFile);
  }, [activeFile]);

  const handleTabShow = useCallback((e: CustomEvent<{name: string}>) => {
    setActivePanel(e.detail.name);
  }, []);

  return (
    <SlTabGroup onSlTabShow={handleTabShow}>
      {
        files.map(file => (
          <SlTab key={file.name} slot="nav" panel={file.name}>{file.name}</SlTab>
        ))
      }
      {
        files.map(file => (
          <SlTabPanel key={file.name} name={file.name} active={activePanel === file.name}>
            <Editor
              key={file.name}
              value={codeByFile[file.name]}
              onValueChange={(code) => {
                setCodeByFile((prev) => ({
                  ...prev,
                  [file.name]: code,
                }));
              }}
              highlight={code => highlight(code, languages.yaml)}
              padding={{
                left: 16,
                right: 16,
                top: 0,
                bottom: 0,
              }}
              style={{
                fontFamily: 'var(--ifm-font-family-monospace)',
                fontSize: 13,
              }}
            />
          </SlTabPanel>
        ))
      }
    </SlTabGroup>
  )
}
