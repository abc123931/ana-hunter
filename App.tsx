import React from "react";
import { RecoilRoot } from "recoil";
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import AppNavigator from "./navigation/AppNavigator";

import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

function createApolloClient(initialState = {}) {
  const cache = new InMemoryCache().restore(initialState);
  const link = new HttpLink({
    uri: process.env.HASURA_URL_GRAPHQL,
    fetch,
  });

  return new ApolloClient({
    cache,
    link,
  });
}

const client = createApolloClient();

const App = () => (
  <ApolloProvider client={client}>
    <RecoilRoot>
      <AppNavigator />
    </RecoilRoot>
  </ApolloProvider>
);

export default App;
