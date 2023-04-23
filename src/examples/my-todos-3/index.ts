import { FileInfo } from "@site/src/components/MonacoEditorWorkspace";
import Bricks from "./bricks.yaml";
import Context from "../my-todos-2/context.yaml";
// import Context from "./context.yaml";
import style from "../my-todos-1/style.txt";

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
