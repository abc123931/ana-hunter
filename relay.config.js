module.exports = {
  src: "./",
  schema: "./schema/schema.graphql",
  language: "typescript",
  extensions: ["ts", "tsx"],
  artifactDirectory: "./types/__generated__",
  exclude: ["**/node_modules/**", "**/__generated__/**", "**/schema/**", "**/styles/**"],
  customScalars: {
    uuid: "String",
  },
};
