import { FileInfo } from "@site/src/components/MonacoEditorWorkspace";
import Bricks from "./bricks.yaml";
import Context from "../my-todos-2/context.yaml";
import styleText from "../my-todos-1/style.txt";

export const title = "Add interactivity";

export const description =
  "While bricks with properties describe the UI, you can define actions in response to events triggered by user interactions, and manage page states by simple JavaScript expressions.";

export const postDescription =
  "The typical data flow in Brick Next is: properties → UI → events → actions → states → properties.";

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
