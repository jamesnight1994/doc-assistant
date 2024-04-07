/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDocument = /* GraphQL */ `mutation CreateDocument(
  $input: CreateDocumentInput!
  $condition: ModelDocumentConditionInput
) {
  createDocument(input: $input, condition: $condition) {
    id
    name
    collectionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateDocumentMutationVariables,
  APITypes.CreateDocumentMutation
>;
export const updateDocument = /* GraphQL */ `mutation UpdateDocument(
  $input: UpdateDocumentInput!
  $condition: ModelDocumentConditionInput
) {
  updateDocument(input: $input, condition: $condition) {
    id
    name
    collectionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateDocumentMutationVariables,
  APITypes.UpdateDocumentMutation
>;
export const deleteDocument = /* GraphQL */ `mutation DeleteDocument(
  $input: DeleteDocumentInput!
  $condition: ModelDocumentConditionInput
) {
  deleteDocument(input: $input, condition: $condition) {
    id
    name
    collectionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteDocumentMutationVariables,
  APITypes.DeleteDocumentMutation
>;
export const createCollection = /* GraphQL */ `mutation CreateCollection(
  $input: CreateCollectionInput!
  $condition: ModelCollectionConditionInput
) {
  createCollection(input: $input, condition: $condition) {
    id
    name
    Documents {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCollectionMutationVariables,
  APITypes.CreateCollectionMutation
>;
export const updateCollection = /* GraphQL */ `mutation UpdateCollection(
  $input: UpdateCollectionInput!
  $condition: ModelCollectionConditionInput
) {
  updateCollection(input: $input, condition: $condition) {
    id
    name
    Documents {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCollectionMutationVariables,
  APITypes.UpdateCollectionMutation
>;
export const deleteCollection = /* GraphQL */ `mutation DeleteCollection(
  $input: DeleteCollectionInput!
  $condition: ModelCollectionConditionInput
) {
  deleteCollection(input: $input, condition: $condition) {
    id
    name
    Documents {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCollectionMutationVariables,
  APITypes.DeleteCollectionMutation
>;
