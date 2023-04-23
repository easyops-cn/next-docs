import type { FileInfo } from "@site/src/interfaces";
import Bricks from "./bricks.yaml";
import Context from "./context.yaml";
import TplSelectCity from "./tpl-select-city.yaml";
import TplHourlyForecast from "./tpl-hourly-forecast.yaml";
import styleText from "./style.txt";

export const title = "Connect to remote services";

export const description =
  "You can easily combine page states with any remote HTTP services.";

export const postDescription =
  "You can also make templates to reuse parts of your UI. Guess what, templates are also bricks!";

export const files = [
  {
    name: "Bricks",
    code: Bricks,
  },
  {
    name: "Context",
    code: Context,
  },
  {
    name: "tpl-select-city",
    code: TplSelectCity,
  },
  {
    name: "tpl-hourly-forecast",
    code: TplHourlyForecast,
  },
] as FileInfo[];

export { styleText };
