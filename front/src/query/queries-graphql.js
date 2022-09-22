import { gql } from "@apollo/client";

export const getCategories = gql`
    query getCategories {
        categories{
        name
        }
    }
`;

// NIE UZYWAM TEGO ZAPYTANIA
// export const getAllProducts = gql`
//     query getAllProducts {
//         category {
//             products {
//                 name
//                 description
//                 gallery
//             }
//         }
//     }
// `;

export const getProductsByCategory = gql`
    query getProductsByCategory($title: String!) {
        category(input: { title: $title }) {
        products {
            id
            name
            gallery
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
