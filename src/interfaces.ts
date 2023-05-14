export interface FileInfo {
  name: ExampleFileName;
  code: string;
  codeSlides?: string[];
  minLines?: number;
  lang?: string;
  defaultActive?: boolean;
  highlightRanges?: HighlightRange[];
}

export type HighlightRange = [
  start: number,
  end: number,
  type?: "added" | "modified"
];

export type ExampleFileName =
  | "Bricks"
  | "Context"
  | "Functions"
  | "Templates"
  | "I18N"
  | `Functions/${string}`
  | `Templates/${string}`;
