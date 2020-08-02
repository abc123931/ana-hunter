module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["inline-dotenv", ["relay", { artifactDirectory: "./types/__generated__" }]],
  };
};
