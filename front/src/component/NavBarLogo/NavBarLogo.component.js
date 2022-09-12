import React, { PureComponent } from 'react';
import {StyledLogoDiv, StyledLogoImg} from './NavBarLogo.styled';


class NavBarLogo extends PureComponent {
    render() {
        const {src} = this.props;
        return (
            <StyledLogoDiv>
                <StyledLogoImg src={src} alt="brand logo"/>
            </StyledLogoDiv>
        );
    }
}

export default NavBarLogo;