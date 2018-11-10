const presets = ["@babel/preset-env"];
const plugins = [
  "@babel/plugin-transform-runtime",
  // "@babel/plugin-transform-async-to-generator",
  "syntax-dynamic-import",
  "angularjs-annotate"
];

module.exports = { presets, plugins };
