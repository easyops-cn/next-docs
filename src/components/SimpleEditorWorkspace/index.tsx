import React, { useCallback } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { EXAMPLE_CODE_LINE_HEIGHT } from "@site/src/constants";
import type { FileInfo } from "@site/src/interfaces";
import styles from "./styles.module.css";

export interface SimpleEditorWorkspaceProps {
  files: FileInfo[];
  currentFile: string;
  theme?: string;
  className?: string;
  onChange?(value: string, filename: string): void;
}

export default function SimpleEditorWorkspace({
  files,
  currentFile,
  onChange,
}: SimpleEditorWorkspaceProps): JSX.Element {
  const file = files.find((file) => file.name === currentFile);

  const handleCodeChange = useCallback(
    (code: string) => {
      onChange?.(code, currentFile);
    },
    [currentFile, onChange]
  );

  return (
    <Editor
      value={file.code}
      onValueChange={handleCodeChange}
      highlight={(code) => highlight(code, languages[file.lang ?? "yaml"])}
      padding={16}
      textareaClassName={styles.codeTextarea}
      preClassName={styles.codePre}
      style={{
        fontFamily: "var(--ifm-font-family-monospace)",
        fontSize: 13,
        lineHeight: `${EXAMPLE_CODE_LINE_HEIGHT}px`,
      }}
    />
  );
}
