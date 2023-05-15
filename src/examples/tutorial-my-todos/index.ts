import type { HighlightRange } from "@site/src/interfaces";
import BricksStep1 from "./bricks.step-1.yaml";
import BricksStep3 from "./bricks.step-3.yaml";
import BricksPart1 from "./bricks.part-1.yaml";
import BricksPart2 from "./bricks.part-2.yaml";
import BricksPart3 from "./bricks.part-3.yaml";
import Context from "./context.yaml";
import styleText from "!!raw-loader!../my-todos-2/style.raw.css";

const hiddenFiles = { "style.css": styleText };

const BricksStep2 = BricksStep1;
const BricksStep4 = BricksPart1;
const BricksStep5 = [BricksPart1, BricksPart3].join("\n");
const BricksStep6 = [BricksPart1, BricksPart2, BricksPart3].join("\n");
const linesStep6 = BricksStep6.split("\n");
const buttonLine = linesStep6.findIndex((line) => line.includes("sl-button"));
const BricksStep7 = [
  ...linesStep6.slice(0, buttonLine + 1),
  "  if: <%= CTX.todos.some(t => t.done) %>",
  ...linesStep6.slice(buttonLine + 1),
].join("\n");

const part1Lines = BricksPart1.split("\n").length;

const highlightRangesStep3: HighlightRange[] = [[7, 13]];
const highlightRangesStep4: HighlightRange[] = [
  [7, 26],
  [28, 28, "modified"],
];
const highlightRangesStep5: HighlightRange[] = [
  [part1Lines + 1, BricksStep5.split("\n").length],
];
const highlightRangesStep6: HighlightRange[] = [
  [part1Lines + 1, part1Lines + BricksPart2.split("\n").length],
];
const highlightRangesStep7: HighlightRange[] = [
  [buttonLine + 2, buttonLine + 2],
];
const highlightRangesContext: HighlightRange[] = [[1, 5]];

export {
  BricksStep1,
  BricksStep2,
  BricksStep3,
  BricksStep4,
  BricksStep5,
  BricksStep6,
  BricksStep7,
  highlightRangesStep3,
  highlightRangesStep4,
  highlightRangesStep5,
  highlightRangesStep6,
  highlightRangesStep7,
  highlightRangesContext,
  Context,
  hiddenFiles,
};
