import React from "react";
import type { FileInfo } from "@site/src/interfaces";
import Bricks from "./bricks.yaml";
import styleText from "!!raw-loader!./style.raw.css";

export const title = "Create user interfaces from storyboards";

export const description =
  "Brick Next lets you build user interfaces by defining storyboards, which are composed of individual pieces called bricks. Combine bricks into pages and apps, just like building LEGOs.";

export const postDescription = (
  <>
    Under the hood, bricks are just{" "}
    <a
      target="_blank"
      rel="noreferrer"
      href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components"
    >
      Web Components
    </a>
    , which are part of the web standards. They are user-defined reusable custom
    elements. Use official builtin bricks, or third party bricks, or create your
    own bricks.
  </>
);

const codeSlides = Bricks.split("\n# slide");
const code = codeSlides.join("");

export const files = [
  {
    name: "Bricks",
    code,
    minLines: code.split("\n").length,
    codeSlides,
  },
] as FileInfo[];

export { styleText };
