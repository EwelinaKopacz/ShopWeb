import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { StyledProductDiv, StyledProductCardDiv, StyledProductImgDiv,
         StyledProductImg, StyledProductContentDiv, StyledProductName,
         StyledProductPrice, StyledCartBtn, StyledOverlayOutOfStock,
         StyledOverlayOutOfStockText
        } from './ProductCard.styled';

import {ReactComponent as CartIcon} from '../../assets/circle-icon-cart.svg';

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

    render(){
        const {item} = this.props;
        const {hover}= this.state;
        console.log(this.state.hover);
        return(
            <StyledProductDiv
                onMouseOver={this.mouseOver.bind(this)}
                onMouseLeave={this.mouseLeave.bind(this)}
            >
                <StyledProductCardDiv>
                    <StyledProductImgDiv >
                        <StyledProductImg src={item.gallery[0]} />
                    </StyledProductImgDiv>

                    <StyledProductContentDiv>
                        <StyledProductName>{item.name}</StyledProductName>
                        <StyledProductPrice>{this.renderPrices()}</StyledProductPrice>
                    </StyledProductContentDiv>

                    {hover && item.inStock && (
                            <StyledCartBtn>
                                <CartIcon/>
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

export default connect (mapStateToProps, null) (ProductCard);