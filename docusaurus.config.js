// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { createHash } = require("crypto");
const MonacoEditorWebpackPlugin = require("monaco-editor-webpack-plugin");

const baseUrl = "/next-docs/";
const brickPackages = ["@next-bricks/shoelace", "@next-bricks/basic"];

const bootstrapJson = {
  brickPackages: brickPackages
    .map((pkg) => require(`${pkg}/dist/bricks.json`))
    .map((pkg) => ({
      ...pkg,
      filePath: `${baseUrl}${pkg.filePath}`,
    })),
};
const bootstrapJsonContent = JSON.stringify(bootstrapJson);
const bootstrapJsonHash = getContentHash(bootstrapJsonContent);
const bootstrapJsonPath = `bootstrap.${bootstrapJsonHash}.json`;

class EmitBootstrapJsonPlugin {
  /**
   * @param {import("webpack").Compiler} compiler
   */
  apply(compiler) {
    compiler.hooks.thisCompilation.tap(
      "EmitBootstrapJsonPlugin",
      (compilation) => {
        compilation.hooks.processAssets.tapAsync(
          {
            name: "copy-webpack-plugin",
            stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
          },
          async (unusedAssets, callback) => {
            const { RawSource } = compiler.webpack.sources;
            const source = new RawSource(bootstrapJsonContent);
            compilation.emitAsset(`preview/${bootstrapJsonPath}`, source);
            callback();
          }
        );
      }
    );
  }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {},
    }),

  plugins: [
    () => ({
      name: "docusaurus-next-runtime",
      configureWebpack(config, isServer, utils) {
        const previewDir = path.join(
          require.resolve("@next-core/brick-playground/package.json"),
          "../dist-preview"
        );
        return {
          mergeStrategy: { "module.rules": "prepend" },
          devServer: {
            client: {
              overlay: false,
            },
          },
          module: {
            rules: [
              {
                test: /\.yaml/,
                type: "asset/source",
              },
              {
                test: /\.txt$/,
                type: "asset/source",
              },
            ],
          },
          plugins: [
            new CopyPlugin({
              patterns: [
                {
                  from: previewDir,
                  to: "preview",
                  // Terser skip this file for minimization
                  info: { minimized: true },
                  transform(buf, filePath) {
                    if (filePath === path.join(previewDir, "index.html")) {
                      return buf
                        .toString()
                        .replace("bootstrap.hash.json", bootstrapJsonPath);
                    }
                    return buf;
                  },
                },
                ...brickPackages.map((pkg) => ({
                  from: path.join(
                    require.resolve(`${pkg}/package.json`),
                    "../dist"
                  ),
                  to: path.join("bricks", pkg.split("/").pop(), "dist"),
                  // Terser skip this file for minimization
                  info: { minimized: true },
                })),
              ],
            }),
            new EmitBootstrapJsonPlugin(),
            new MonacoEditorWebpackPlugin({
              languages: ["javascript", "typescript" /* , 'yaml' */],
              features: [
                "!accessibilityHelp",
                "!codelens",
                "!colorPicker",
                "!documentSymbols",
                "!fontZoom",
                "!iPadShowKeyboard",
                "!inspectTokens",
                "!stickyScroll",
                "!links",
                "!inlayHints",
                "!documentSymbols",
                "!browser",
              ],
              filename: `workers/[name].[contenthash:8].worker.js`,
            }),
          ],
        };
      },
    }),
  ],
};

function getContentHash(content) {
  const hash = createHash("sha1");
  hash.update(content);
  return hash.digest("hex").slice(0, 8);
}

async function createConfig() {
  const lightCodeTheme = (await import("./src/utils/prismLight.mjs")).default;
  const darkCodeTheme = (await import("./src/utils/prismDark.mjs")).default;
  config.themeConfig.prism.theme = lightCodeTheme;
  config.themeConfig.prism.darkTheme = darkCodeTheme;
  return config;
}

module.exports = createConfig;

// module.exports = config;
