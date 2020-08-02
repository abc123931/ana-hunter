module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true,
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },

  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],

  rules: {
    "no-irregular-whitespace": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },

  settings: {
    react: {
      version: "detect",
    },
  },
};
