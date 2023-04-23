import React from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import { usePrismTheme } from "@docusaurus/theme-common";
import {
  EXAMPLE_CODE_LINE_HEIGHT,
  EDITOR_PADDING_TOP,
  EDITOR_SCROLLBAR_SIZE,
} from "@site/src/constants";
import type { FileInfo } from "@site/src/interfaces";
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
  const prismTheme = usePrismTheme();
  const file = files.find((file) => file.name === currentFile);

  return (
    <Highlight
      {...defaultProps}
      theme={prismTheme}
      code={file.code}
      language={(file.lang ?? "yaml") as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx(className, classNameProp, styles.editor)}
          style={{
            ...style,
            lineHeight: `${EXAMPLE_CODE_LINE_HEIGHT}px`,
            paddingTop: EDITOR_PADDING_TOP,
            paddingBottom: EDITOR_SCROLLBAR_SIZE,
          }}
        >
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-key
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
