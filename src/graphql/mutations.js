/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createListings = /* GraphQL */ `
  mutation CreateListings(
    $input: CreateListingsInput!
    $condition: ModellistingsConditionInput
  ) {
    createListings(input: $input, condition: $condition) {
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
export const updateListings = /* GraphQL */ `
  mutation UpdateListings(
    $input: UpdateListingsInput!
    $condition: ModellistingsConditionInput
  ) {
    updateListings(input: $input, condition: $condition) {
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
export const deleteListings = /* GraphQL */ `
  mutation DeleteListings(
    $input: DeleteListingsInput!
    $condition: ModellistingsConditionInput
  ) {
    deleteListings(input: $input, condition: $condition) {
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
