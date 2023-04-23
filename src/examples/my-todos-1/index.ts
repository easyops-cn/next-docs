import { FileInfo } from "@site/src/components/MonacoEditorWorkspace";
import Bricks from "./bricks.yaml";
import style from "./style.txt";

export const files = [
  {
    name: "Bricks",
    code: Bricks,
  },
] as FileInfo[];

export { style };
