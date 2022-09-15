import { gql } from "@apollo/client";

export const getCategories = gql`
    query {
        categories{
        name
        }
    }
`;

export const getAllProducts = gql`
    query {
        category {
            products {
                name
                description
                gallery
        }
    }
}
`;