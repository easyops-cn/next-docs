import { FileInfo } from "@site/src/components/MonacoEditorWorkspace";
import Bricks from "./bricks.yaml";
import Context from "./context.yaml";
import styleText from "../my-todos-1/style.txt";

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

export { styleText };
