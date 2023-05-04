import type { FileInfo } from "@site/src/interfaces";
import Bricks from "./bricks.yaml";
import Context from "./context.yaml";
import styleText from "!!raw-loader!../weather-app/style.raw.css";

export const files = [
  {
    name: "Bricks",
    code: Bricks,
  },
  {
    name: "Context",
    code: Context,
    defaultActive: true,
  },
] as FileInfo[];

export { styleText };
