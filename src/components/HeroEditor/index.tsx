import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import type { FileInfo } from "@site/src/interfaces";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface HeroEditorProps {
  file: FileInfo;
  theme?: string;
  showLineNumbers?: boolean;
  typingEffectReady?: boolean;
  className?: string;
  onChange?(value: string): void;
}

export default function HeroEditor({
  file,
  showLineNumbers,
  typingEffectReady,
  className: classNameProp,
  onChange,
}: HeroEditorProps): JSX.Element {
  const [code, setCode] = useState(() =>
    file.codeSlides ? file.codeSlides[0] : file.code
  );
  const [typingEffectDone, setTypingEffectDone] = useState(false);

  useEffect(() => {
    if (file.codeSlides && typingEffectReady) {
      performTypingEffect(file.codeSlides, setCode, () => {
        setTypingEffectDone(true);
      });
    }
  }, [file, typingEffectReady]);

  useEffect(() => {
    if (file.codeSlides && code !== file.codeSlides[0]) {
      onChange?.(code);
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
      setTimeout(resolve, 2000);
    }
  };

  setTimeout(run, 2000);
}

function getTransitions(codeSlides: string[]) {
  return transitionJoin(
    codeSlides.slice(1).map((line) => transitionJoin(line.split(""), 20)),
    2000
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
