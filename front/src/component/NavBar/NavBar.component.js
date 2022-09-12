import React, { PureComponent } from 'react';
import StyledNav from './NavBar.styled';
import NavBarLinks from '../NavBarLinks/index';
import NavBarLogo from '../NavBarLogo/index';
import NavBarIcons from '../NavBarIcons/index';

import BrandIcon from '../../assets/brand-icon.png';

class NavBar extends PureComponent {
    render() {
        return (
            <StyledNav>
                <NavBarLinks/>
                <NavBarLogo src={BrandIcon}/>
                <NavBarIcons/>
            </StyledNav>
        );
    }
}

export default NavBar;