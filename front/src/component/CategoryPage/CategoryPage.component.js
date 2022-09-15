import React, { PureComponent } from 'react';
import ProductCard from '../ProductCard/index.js';
import CategoryName from '../CategoryName/index.js';

import client from '../../util/apollo-client';
import { getAllProducts } from '../../query/queries-graphql';

import StyledProductSection from './CategoryPage.styled';

class CategoryPage extends PureComponent {
    state = {
        products: []
    }

    componentDidMount(){
        this.fetchAllProducts();
    }

    async fetchAllProducts(){
        const response = await client.query({
            query:getAllProducts
        })

        this.setState({
            products: [...response.data.category.products]
        })
    }

    render() {
        const {products} = this.state;
      return (
        <>
            <CategoryName catName='All'/>
            <StyledProductSection>
            {products.map((product) => 
                <ProductCard
                    key={product.id}
                    item={product}
                />
            )}
            </StyledProductSection>
        </>
    );
    }
  }

  export default CategoryPage;