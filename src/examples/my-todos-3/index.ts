import type { FileInfo } from "@site/src/interfaces";
import Bricks from "./bricks.yaml";
import Context from "../my-todos-2/context.yaml";
import styleText from "!!raw-loader!../my-todos-2/style.raw.css";

export const files = [
  {
    name: "Bricks",
    code: Bricks,
  },
  {
    name: "Context",
    code: Context,
  },
] as FileInfo[];

export const hiddenFiles = {
  "style.css": styleText,
};
