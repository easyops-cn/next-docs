import React from "react";
import type { FileInfo } from "@site/src/interfaces";
import Bricks from "./bricks.yaml";
import styleText from "./style.txt";

export const title = "Create user interfaces by declaring bricks";

export const description =
  "Brick Next lets you build user interfaces out of individual pieces called bricks, declaratively. Combine bricks into pages and apps, just like building LEGOs.";

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

export const files = [
  {
    name: "Bricks",
    code: Bricks,
  },
] as FileInfo[];

export { styleText };
