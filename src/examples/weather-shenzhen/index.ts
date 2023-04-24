import type { FileInfo } from "@site/src/interfaces";
import Bricks from "./bricks.yaml";
import Context from "../weather-app/context.yaml";
import styleText from "!!raw-loader!../weather-app/style.raw.css";

export const title = "Connect to remote services";

export const description =
  "You can easily combine page states with any remote HTTP services.";

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
