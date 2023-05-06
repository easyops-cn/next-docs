/* global Prism */
const yamlString = Prism.languages.yaml.string;

Prism.languages.insertBefore("yaml", "scalar", {
  "expression-string": {
    pattern: /["']?<%~?\s+[\s\S]*?\s+%>["']?/,
    inside: {
      string: /^["']|["']$/,
      punctuation: /<%~?|%>/,
      expression: {
        pattern: /[\s\S]+/,
        inside: Prism.languages.javascript,
      },
    },
  },
});

Prism.languages.yaml.string = {
  ...yamlString,
  pattern: new RegExp(
    yamlString.pattern.source.replace(/(\(\?:"|"\|')/g, "$1(?!<%~?\\s+)"),
    yamlString.pattern.flags
  ),
};
