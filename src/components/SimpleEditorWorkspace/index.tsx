import React, { useMemo } from "react";
import CodeBlock from "@theme/CodeBlock";
import type { FileInfo, HighlightRange } from "@site/src/interfaces";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface SimpleEditorWorkspaceProps {
  files: FileInfo[];
  currentFile: string;
  theme?: string;
  className?: string;
}

export default function SimpleEditorWorkspace({
  files,
  currentFile,
  className: classNameProp,
}: SimpleEditorWorkspaceProps): JSX.Element {
  const file = files.find((file) => file.name === currentFile);
  const code = useMemo(
    () => getCodeWithHighlightRanges(file.code, file.highlightRanges),
    [file]
  );

  return (
    <CodeBlock
      className={clsx(classNameProp, styles.editor)}
      language={file.lang ?? "yaml"}
    >
      {code}
    </CodeBlock>
  );
}

function getCodeWithHighlightRanges(code: string, ranges?: HighlightRange[]) {
  if (!ranges) {
    return code;
  }
  const lines = code.split("\n");
  let cursor = 0;
  const result = ranges.reduce((acc, range) => {
    const [start, end] = range;
    const chunk = [
      ...acc,
      ...lines.slice(cursor, start - 1),
      "// highlight-start",
      ...lines.slice(start - 1, end),
      "// highlight-end",
    ];
    cursor = end;
    return chunk;
  }, []);
  if (cursor < lines.length) {
    result.push(...lines.slice(cursor));
  }
  return result.join("\n");
}
