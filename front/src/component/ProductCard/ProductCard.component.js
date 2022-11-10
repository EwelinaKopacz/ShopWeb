import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setProduct } from '../../actions';
import { Link } from 'react-router-dom';
import { StyledProductDiv, StyledProductCardDiv, StyledProductImgDiv,
         StyledProductImg, StyledProductContentDiv, StyledProductName,
         StyledProductPrice, StyledCartBtn, StyledBtnImg,
         StyledOverlayOutOfStock, StyledOverlayOutOfStockText,StyledProductBtn
        } from './ProductCard.styled';

import emptyCartIcon from '../../assets/empty-cart-white.svg';


class ProductCard extends PureComponent {
    state = {
        hover:false,
    }

    renderPrices(){
        const {prices,pickedCurrency} = this.props;
        return (
            prices.filter(({currency}) => currency.symbol === pickedCurrency).map(({currency,amount})=><>{currency.symbol}{amount}</>)
        )
    }

    mouseOver(){
        this.setState({hover:true})
    }

    mouseLeave(){
        this.setState({hover:false})
    }

    showProduct(product){
        const {addPickedProduct} = this.props;
        addPickedProduct(product);
    }

    render(){
        const {item} = this.props;
        const {hover}= this.state;
        return(
            <StyledProductDiv
                onMouseOver={this.mouseOver.bind(this)}
                onMouseLeave={this.mouseLeave.bind(this)}
                key={item.id}
            >
                <StyledProductCardDiv>
                    <Link to={`product/${item.id}`}>
                        <StyledProductBtn onClick={()=>this.showProduct(item)}>
                            <StyledProductImgDiv >
                                <StyledProductImg src={item.gallery[0]} />
                            </StyledProductImgDiv>

                            <StyledProductContentDiv>
                                <StyledProductName>{item.name}</StyledProductName>
                                <StyledProductPrice>{this.renderPrices()}</StyledProductPrice>
                            </StyledProductContentDiv>
                        </StyledProductBtn>
                    </Link>

                    {hover && item.inStock && ( // zastanowic sie czy nie zrobic komponentu dla btn cart
                            <StyledCartBtn>
                                <StyledBtnImg src={emptyCartIcon} alt="empty cart icon"/>
                            </StyledCartBtn>
                    )}

                    {hover && !item.inStock && (
                        <StyledOverlayOutOfStock>
                            <StyledOverlayOutOfStockText>
                            out of stock
                            </StyledOverlayOutOfStockText>
                        </StyledOverlayOutOfStock>
                    )}

                </StyledProductCardDiv>
            </StyledProductDiv>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      pickedCurrency: state.currency
    }
}

const mapDispatchToProps = dispatch => ({
    addPickedProduct:(value) => dispatch(setProduct(value))
})

export default connect (mapStateToProps, mapDispatchToProps) (ProductCard);