import { print } from "graphql";
import { mutate, ConfigInterface } from "swr";
import { useSWRW } from "../../../lib/fetcher";
import { GetBlogsQuery, GetBlogsDocument } from "../../../apollo/graphql";

export function mutateGetBlogs() {
  mutate([print(GetBlogsDocument)]);
}

export function useGetBlogs(options?: ConfigInterface) {
  return useSWRW<GetBlogsQuery>(print(GetBlogsDocument), {
    options,
  });
}
