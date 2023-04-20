import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-yaml';
import 'prismjs/themes/prism.css';

export interface FileTabsProps {
  files: FileInfo[];
  defaultFile?: string;
  onChange?: (codeByFile: Record<string, string>) => void;
}

export interface FileInfo {
  name: string;
  code: string;
}

export default function FileTabs({ files, defaultFile, onChange } : FileTabsProps): JSX.Element {
  const [codeByFile, setCodeByFile] = useState<Record<string, string>>(
    () => Object.fromEntries(files.map(f => [f.name, f.code]))
  );
  const [defaultIndex] = useState(() => defaultFile ? files.findIndex(f => f.name === defaultFile) : 0);

  useEffect(() => {
    onChange?.(codeByFile);
  }, [onChange, codeByFile]);

  return (
    <Tabs defaultIndex={defaultIndex}>
      <TabList>
      {
        files.map(file => (
          <Tab key={file.name}>{file.name}</Tab>
        ))
      }
      </TabList>
      {
        files.map(file => (
          <TabPanel key={file.name} name={file.name}>
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
          </TabPanel>
        ))
      }
    </Tabs>
  )
}
