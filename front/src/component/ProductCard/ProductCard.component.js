import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { StyledProductCardDiv, StyledProductImgDiv, 
        StyledProductImg, StyledProductContentDiv, 
        StyledProductName, StyledProductPrice } from './ProductCard.styled';

class ProductCard extends PureComponent {

    renderPrices(){
        const {prices,pickedCurrency} = this.props;
        return (
            prices.filter(({currency}) => currency.symbol === pickedCurrency).map(({currency,amount})=><p>{currency.symbol}{amount}</p>)
        )
    }

    render(){
        const {item} = this.props;
        return(
            <StyledProductCardDiv >
                <StyledProductImgDiv >
                    <StyledProductImg src={item.gallery[0]} />
                </StyledProductImgDiv>

                <StyledProductContentDiv>
                    <StyledProductName>{item.name}</StyledProductName>
                    <StyledProductPrice>{this.renderPrices()}</StyledProductPrice>
                </StyledProductContentDiv>
            </StyledProductCardDiv>
        )
    }
}


const mapStateToProps = (state) => {
    return {
      pickedCurrency: state.currency
    }
}

export default connect (mapStateToProps, null) (ProductCard);