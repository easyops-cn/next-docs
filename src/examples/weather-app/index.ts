import type { FileInfo } from "@site/src/interfaces";
import Bricks from "./bricks.yaml";
import Context from "./context.yaml";
import TplSelectCity from "./tpl-select-city.yaml";
import TplHourlyForecast from "./tpl-hourly-forecast.yaml";
import styleText from "!!raw-loader!./style.raw.css";

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
