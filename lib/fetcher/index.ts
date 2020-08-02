import useSWR, { ConfigInterface } from "swr";
import { GraphQLClient } from "graphql-request";

type Props = {
  headers?: { name: string; value: string }[];
  variables?: { [key: string]: any };
  options?: ConfigInterface;
};

const client = new GraphQLClient(process.env.HASURA_URL_GRAPHQL as string);

export function useSWRW<T>(query: string, { headers, variables, options }: Props) {
  if (headers) headers.map(({ name, value }) => client.setHeader(name, value));
  return useSWR<T>(
    variables ? [query, ...Object.values(variables)] : query,
    () => client.request(query, variables),
    options
  );
}

export function graphqlRequest<T>(query: string, { headers, variables }: Omit<Props, "options">) {
  if (headers) headers.map(({ name, value }) => client.setHeader(name, value));
  return client.request<T>(query, variables);
}
