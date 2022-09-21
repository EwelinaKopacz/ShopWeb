import { gql } from "@apollo/client";

export const getCategories = gql`
    query getCategories {
        categories{
        name
        }
    }
`;

export const getAllProducts = gql`
    query getAllProducts {
        category {
            products {
                name
                description
                gallery
            }
        }
    }
`;

export const getProductsByCategory = gql`
    query getProductsByCategory($title: String!) {
        category(input: { title: $title }) {
        products {
            name
            gallery
        }
    }
}

`;
