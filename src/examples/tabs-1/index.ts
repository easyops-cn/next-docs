import type { FileInfo } from "@site/src/interfaces";
import Bricks from "./bricks.yaml";
import Context from "./context.yaml";
import styleText from "!!raw-loader!./style.raw.css";

export const files = [
  {
    name: "Bricks",
    code: Bricks,
    highlightRanges: [
      [17, 22],
      [27, 28],
    ],
  },
  {
    name: "Context",
    code: Context,
  },
] as FileInfo[];

export const hiddenFiles = { "style.css": styleText };
