import Bricks from "./bricks.yaml";
import Context from "./context.yaml";
import { FileInfo } from "@site/src/components/MonacoEditorWorkspace";

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
