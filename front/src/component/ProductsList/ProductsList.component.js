import React, { PureComponent } from 'react';
import StyledProductsList from './ProductsList.styled';
import ProductCard from '../ProductCard/index.js';
import { connect } from 'react-redux';
import client from '../../util/apollo-client';
import { getProductsByCategory } from '../../query/queries-graphql';


class ProductsList extends PureComponent {
    state = {
        products: [],
        currCategory: "",
       
    }
    componentDidMount(){
        this.fetchProducts();
    }

    componentDidUpdate(){
        const {pickedCategory} = this.props;
        const {currCategory} = this.state;
        if(currCategory !== pickedCategory){
            this.updateCategory(pickedCategory);
            this.fetchProducts();
        }
    }

    updateCategory(newCategory){
        this.setState({
            currCategory:newCategory
        })
    }

    async fetchProducts(){
        const {pickedCategory} = this.props;
        const response = await client.query({
            query:getProductsByCategory,
            variables: {title:pickedCategory}
        })

        this.setState({
            products: [...response.data.category.products]
        })
    }

    render(){
        const {products} = this.state;
        return (
            <StyledProductsList>
                {products.map((product) =>
                    <ProductCard
                        key={product.id}
                        item={product}
                    />
                )}
            </StyledProductsList>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      pickedCategory: state.category,
    }
}

export default connect (mapStateToProps, null) (ProductsList);
