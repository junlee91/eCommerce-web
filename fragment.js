import { gql } from "apollo-boost";

export const PRODUCT_FRAGMENT = gql`
  fragment ProductItems on Product {
    id
    name
    detail
    price
    onCart @client # mix local state with remote state (API)
    photo {
      url
    }
  }
`;
