import React, { PureComponent } from 'react';
import { StyledProductCardDiv, StyledProductImgDiv, StyledProductImg, StyledProductContentDiv, StyledProductName } from './ProductCard.styled';

class ProductCard extends PureComponent {

    render(){
        const {item} = this.props;
        return(
            <StyledProductCardDiv >
                <StyledProductImgDiv >
                    <StyledProductImg src={item.gallery[0]} />
                </StyledProductImgDiv>

                <StyledProductContentDiv>
                    <StyledProductName>{item.name}</StyledProductName>
                </StyledProductContentDiv>
            </StyledProductCardDiv>
        )
    }
}

export default ProductCard;