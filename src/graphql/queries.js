/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getListings = /* GraphQL */ `
  query GetListings($id: ID!) {
    getListings(id: $id) {
      id
      name
      location
      description
      price
      image
      createdAt
      updatedAt
    }
  }
`;
export const listListingss = /* GraphQL */ `
  query ListListingss(
    $filter: ModellistingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListingss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        description
        price
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
