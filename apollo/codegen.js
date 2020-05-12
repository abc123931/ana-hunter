// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  schema: [
    {
      "https://api.ana-hunter.dev/v1/graphql": {
        headers: {
          "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: ["apollo/documents/*.{ts,tsx}"],
  overwrite: true,
  generates: {
    "apollo/graphql.tsx": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        preResolveTypes: false,
        scalars: {
          uuid: "string",
          timestamptz: "string",
          _text: "string[]",
        },
        namingConvention: {
          typeNames: "pascal-case#pascalCase",
          enumValues: "upper-case#upperCase",
        },
        apolloReactCommonImportFrom: "@apollo/client",
        apolloReactComponentsImportFrom: "@apollo/client",
        apolloReactHocImportFrom: "@apollo/client",
        apolloReactHooksImportFrom: "@apollo/client",
      },
    },
  },
};
