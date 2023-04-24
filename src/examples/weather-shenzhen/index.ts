import type { FileInfo } from "@site/src/interfaces";
import Bricks from "./bricks.yaml";
import Context from "./context.yaml";
import styleText from "!!raw-loader!../weather-app/style.raw.css";

export const title = "Connect to backend services";

export const description =
  "You can easily combine page states with any remote HTTP services.";

export const postDescription =
  "Context can be initialized with a static value, or from a backend service.";

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
