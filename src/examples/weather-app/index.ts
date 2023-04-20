import weatherAppBricks from "./bricks.yaml";
import weatherAppContext from "./context.yaml";
import { FileInfo } from "@site/src/components/MonacoEditorWorkspace";

export default [
  {
    name: "Bricks",
    code: weatherAppBricks,
  },
  {
    name: "Context",
    code: weatherAppContext,
  }
] as FileInfo[];
