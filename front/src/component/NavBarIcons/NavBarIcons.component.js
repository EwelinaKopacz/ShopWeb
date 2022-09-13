import React, { PureComponent } from 'react';
import StyledNavIconsDiv from './NavBarIcons.styled';
import NavBarCurr from '../NavBarCurr/index';
import NavBarCart from '../NavBarCart/index';


class NavBarIcons extends PureComponent {
    render() {
        return (
            <StyledNavIconsDiv>
                <NavBarCurr/>
                <NavBarCart/>
            </StyledNavIconsDiv>
        );
    }
}

export default NavBarIcons;