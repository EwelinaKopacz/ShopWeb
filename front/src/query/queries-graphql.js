import { gql } from "@apollo/client";

export const getCategories = gql`
    query getCategories {
        categories{
        name
        }
    }
`;


export const getProductsByCategory = gql`
    query getProductsByCategory($title: String!) {
        category(input: { title: $title }) {
            products {
                id
                name
                inStock
                gallery
                description
                category
                attributes{
                  id
                  name
                  type
                  items {
                    displayValue
                    value
                    id
                  }
                }
                prices {
                    currency {
                        label
                        symbol
                    }
                    amount
                  }
                brand
            }
        }
    }
`;

export const getCurrencies = gql`
    query getCurrencies {
        currencies {
            label
            symbol
        }
    }
`;
