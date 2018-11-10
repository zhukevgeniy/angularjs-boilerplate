const presets = ["@babel/preset-env"];
const plugins = [
  "@babel/plugin-transform-runtime",
  "syntax-dynamic-import",
  "angularjs-annotate"
];

module.exports = { presets, plugins };
