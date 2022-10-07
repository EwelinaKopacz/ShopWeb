import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavUl = styled.ul`
   height: 5.6rem;
   width: 23.4rem;
   align-self: flex-end;
   display: flex;
   align-items: flex-start;
   padding: 0px;
`;

const StyledNavLink = styled(NavLink)`
    display: inline-block;
    height: 5.2rem;
    padding: 4px 16px;
    font-weight: var(--fw-regular);
    font-size: var(--fs-menu-link);
    font-style: normal;
    line-height: 19.2px;
    color:var(--clr-text);
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        color:var(--clr-primary);
        border-bottom: 2px solid var(--clr-primary);
        font-weight: var(--fw-semi-bold);
    }
    &.active {
        color:var(--clr-primary);
        border-bottom: 2px solid var(--clr-primary);
        font-weight: var(--fw-semi-bold);
    }
`;

const StyledNavLi = styled.li`
    position: relative;
    cursor: pointer;
`;

export {StyledNavUl, StyledNavLi, StyledNavLink}