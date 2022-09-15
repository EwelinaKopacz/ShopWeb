import React, { PureComponent } from 'react';
import emptyCartIcon from '../../assets/empty-cart.png';
import { StyledCartDiv, StyledCartImg } from './NavBarCart.styled';

class NavBarCart extends PureComponent {
    render() {
        return (
            <StyledCartDiv>
                <StyledCartImg src={emptyCartIcon} alt="empty cart icon"/>
            </StyledCartDiv>
        );
    }
}

export default NavBarCart;