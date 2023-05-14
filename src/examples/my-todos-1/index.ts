import type { FileInfo } from "@site/src/interfaces";
import Bricks from "./bricks.yaml";
import styleText from "!!raw-loader!./style.raw.css";

const codeSlides = Bricks.split("\n# slide");
const code = codeSlides.join("");

export const files = [
  {
    name: "Bricks",
    code,
    minLines: code.split("\n").length,
    codeSlides,
  },
] as FileInfo[];

export const hiddenFiles = {
  "style.css": styleText,
};
