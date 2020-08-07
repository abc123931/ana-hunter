import { useMemo } from "react";
import { Environment, Network, RecordSource, Store } from "relay-runtime";
import type { Variables, RequestParameters, FetchFunction } from "relay-runtime";

function createEnvironment() {
  return new Environment({
    network: Network.create((async function (request: RequestParameters, variables: Variables) {
      return fetch(process.env.HASURA_URL_GRAPHQL as string, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }, // Add authentication and other headers here
        body: JSON.stringify({
          query: request.text, // GraphQL text from input
          variables,
        }),
      }).then((response) => response.json());
    } as unknown) as FetchFunction),
    store: new Store(new RecordSource()),
  });
}

export function initEnvironment() {
  // Create a network layer from the fetch function
  const environment = createEnvironment();

  return environment;
}

export function useEnvironment() {
  const store = useMemo(() => initEnvironment(), []);
  return store;
}
