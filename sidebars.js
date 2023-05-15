/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  docsSidebar: [
    {
      type: "category",
      label: "Learn",
      items: ["learn/quick-start", "learn/tutorial", "learn/installation"],
    },
    {
      type: "category",
      label: "Concepts",
      items: [
        "concepts/brick-life-cycle",
        "concepts/expressions",
        "concepts/events",
        "concepts/context",
        "concepts/provider-bricks",
        "concepts/conditional-rendering",
        "concepts/custom-templates",
        "concepts/template-state",
        "concepts/custom-processors",
        "concepts/storyboard-functions",
        "concepts/control-nodes",
        "concepts/nesting-bricks",
        "concepts/history",
        "concepts/i18n",
        "concepts/placeholders",
        "concepts/pipes",
        // "concepts/theme-and-mode",
        "concepts/media-query",
      ],
    },
  ],
};

module.exports = sidebars;
