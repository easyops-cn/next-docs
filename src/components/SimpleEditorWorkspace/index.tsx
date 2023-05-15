import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import type { FileInfo, HighlightRange } from "@site/src/interfaces";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface SimpleEditorWorkspaceProps {
  files: FileInfo[];
  currentFile: string;
  theme?: string;
  showLineNumbers?: boolean;
  typingEffectReady?: boolean;
  className?: string;
  onChange?(value: string, filename: string): void;
}

export default function SimpleEditorWorkspace({
  files,
  currentFile,
  showLineNumbers,
  typingEffectReady,
  className: classNameProp,
  onChange,
}: SimpleEditorWorkspaceProps): JSX.Element {
  const file = files.find((file) => file.name === currentFile);
  const [code, setCode] = useState(() =>
    file.codeSlides
      ? file.codeSlides[0]
      : getCodeWithHighlightRanges(file.code, file.highlightRanges)
  );
  const [typingEffectDone, setTypingEffectDone] = useState(false);

  useEffect(() => {
    if (file.codeSlides && typingEffectReady) {
      performTypingEffect(file.codeSlides, setCode, () =>
        setTypingEffectDone(true)
      );
    }
  }, [file, typingEffectReady]);

  useEffect(() => {
    if (file.codeSlides && code !== file.codeSlides[0]) {
      onChange?.(code, file.name);
    }
  }, [code, file, onChange]);

  return (
    <CodeBlock
      className={clsx(classNameProp, styles.editor, {
        [styles.showCursor]: typingEffectReady && !typingEffectDone,
      })}
      language={file.lang ?? "yaml"}
      showLineNumbers={showLineNumbers}
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

function performTypingEffect(
  codeSlides: string[],
  setCode: React.Dispatch<React.SetStateAction<string>>,
  resolve: () => void
) {
  const transitions = getTransitions(codeSlides);
  let i = 0;
  const run = function () {
    const text = transitions[i] as string;
    setCode((prev) => prev + text);

    const delay = transitions[++i] as number;
    if (delay) {
      i++;
      setTimeout(run, delay);
    } else {
      setTimeout(resolve, 1000);
    }
  };

  setTimeout(run, 2000);
}

function getTransitions(codeSlides: string[]) {
  return transitionJoin(
    codeSlides.slice(1).map((line) => transitionJoin(line.split(""), 30)),
    1000
  );
}

type TransitionItem = string | number;

function transitionJoin(
  array: unknown[],
  ...joins: TransitionItem[]
): TransitionItem[] {
  const result = [];
  let i = 0;
  while (i < array.length) {
    const parts = [].concat(array[i]).flat(Infinity);
    result.push(...parts);
    i++;
    if (i < array.length && parts.length > 0) {
      result.push(...joins);
    }
  }
  return result;
}
