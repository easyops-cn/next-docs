export interface FileInfo {
  name: ExampleFileName;
  code: string;
  codeSlides?: string[];
  minLines?: number;
  lang?: string;
  defaultActive?: boolean;
}

export type ExampleFileName =
  | "Bricks"
  | "Context"
  | "Functions"
  | "Templates"
  | "I18N"
  | `Functions/${string}`
  | `Templates/${string}`;
