import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import {StyledLogoDiv, StyledLogoImg} from './NavBarLogo.styled';


class NavBarLogo extends PureComponent {
    render() {
        const {src} = this.props;
        return (
            <StyledLogoDiv>
                <Link to="/">
                    <StyledLogoImg src={src} alt="brand logo"/>
                </Link>
            </StyledLogoDiv>
        );
    }
}

export default NavBarLogo;