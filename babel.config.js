module.exports = function (api) {
  api.cache(true);

  const presets = [
    require("next/babel"),
  ];

  const plugins = [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ];

  return {
    presets,
    plugins
  };
};
