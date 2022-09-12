import React, { PureComponent } from 'react';
import NavBar from '../NavBar/index';
import StyledHeaderDiv from './Header.styled.js';

class Header extends PureComponent {
    render() {
        return (
            <StyledHeaderDiv>
                <NavBar/>
            </StyledHeaderDiv>
        );
    }
}

export default Header;