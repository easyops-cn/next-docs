import { FileInfo } from "@site/src/components/MonacoEditorWorkspace";
import Bricks from "./bricks.yaml";
import Context from "./context.yaml";
import style from "./style.txt";

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

export { style };
