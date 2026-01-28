// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");
const { createHash } = require("crypto");
const _ = require("lodash");

const originalFilePath = path.resolve(
  require.resolve("monaco-editor/package.json"),
  "../esm/vs/editor/common/services/findSectionHeaders.js"
);

const baseUrl = "/";
const brickPackages = [
  "@next-bricks/basic",
  "@next-bricks/containers",
  "@next-bricks/form",
  "@next-bricks/icons",
  "@next-bricks/shoelace",
];

const defaultLocale = "en";
const locale = process.env.DOCUSAURUS_CURRENT_LOCALE || defaultLocale;
// When running `yarn start`, the `DOCUSAURUS_CURRENT_LOCALE` is `"undefined"`
const baseUrlWithLocale = `${baseUrl}${
  locale === defaultLocale || locale === "undefined" ? "" : `${locale}/`
}`;

const bootstrapJson = {
  brickPackages: brickPackages
    .map((pkg) => require(`${pkg}/dist/bricks.json`))
    .map((pkg) => ({
      ...pkg,
      filePath: `${baseUrlWithLocale}preview/${pkg.filePath}`,
    })),
  settings: {
    misc: {
      weather_api_key: "9e08e5e99e0c4b4c89023605231804",
    },
  },
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
            name: "EmitBootstrapJsonPlugin",
            stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
          },
          async (unusedAssets, callback) => {
            const { RawSource } = compiler.webpack.sources;
            const source = new RawSource(bootstrapJsonContent);
            compilation.emitAsset(`preview/${bootstrapJsonPath}`, source);

            const todos = [
              {
                title: "Hard work",
                done: true,
              },
              {
                title: "Have launch",
                done: false,
              },
              {
                title: "Go on vacation",
                done: false,
              },
            ];
            const todosSource = new RawSource(JSON.stringify(todos, null, 2));
            compilation.emitAsset("preview/todos.json", todosSource);

            callback();
          }
        );
      }
    );
  }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Brick Next",
  tagline: "A low-code engine library based on Web Components",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://brick-next.js.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "easyops-cn", // Usually your GitHub org/user name.
  projectName: "brick-next", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  future: {
    experimental_faster: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: defaultLocale,
    locales: ["en", "zh"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: "https://github.com/easyops-cn/next-docs/tree/master/",
        },
        blog: {
          showReadingTime: true,
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
      image: "img/brick-next-social-card.png",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Brick Next",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://bricks.js.org/",
            label: "Bricks",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/easyops-cn/next-core",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            position: "right",
            type: "custom-ask-ai",
          },
          {
            position: "right",
            type: "search",
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
                label: "Learn",
                to: "/docs/learn/quick-start",
              },
              {
                label: "Concepts",
                to: "/docs/concepts/brick-life-cycle",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Bricks",
                href: "https://bricks.js.org/",
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
                href: "https://github.com/easyops-cn/next-core",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UWinTech, Inc.`,
      },
      prism: {},
    }),

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      // /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ["en", "zh"],
        removeDefaultStopWordFilter: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  plugins: [
    () => ({
      name: "docusaurus-next-runtime",
      configureWebpack(config, isServer, { currentBundler }) {
        const previewDir = path.join(
          require.resolve("@next-core/preview/package.json"),
          "../dist"
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
                test: /\.wasm$/,
                type: "asset/resource",
                generator: {
                  filename: "[name].[hash][ext]",
                },
              },
            ],
          },
          plugins: [
            new currentBundler.instance.CopyRspackPlugin({
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
                  to: path.join("preview/bricks", path.basename(pkg), "dist"),
                  // Terser skip this file for minimization
                  info: { minimized: true },
                })),
              ],
            }),
            new EmitBootstrapJsonPlugin(),
            new currentBundler.instance.NormalModuleReplacementPlugin(
              new RegExp(`^${_.escapeRegExp(originalFilePath)}$`),
              // Refactor without 'd' flag of RegExp
              path.resolve(__dirname, "src/replaces/findSectionHeaders.js")
            ),
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
