import { gql } from "@apollo/client";

gql`
  query GetBlogs {
    blogs(order_by: { updatedAt: desc }) {
      ...BlogField
    }
  }

  fragment BlogField on blogs {
    author
    id
    image
    summary
    title
    url
    updatedAt
  }
`;
