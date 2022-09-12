import styled from 'styled-components';

const StyledNavUl = styled.ul`
   align-self: flex-end;
   width: auto;
   height: 56px;
   display: flex;
   align-items: flex-start;
`;

const StyledNavLi = styled.li`
    padding: 4px 16px;
`;

const StyledNavLink = styled.a`
    font-weight: var( --fw-regular);
    font-size: var(--fs-menu-link);
    font-style: normal;
    line-height: 120%;
    color:var(--clr-text);
    text-align: center;
    text-transform: uppercase;
    width: auto;
    height: 2rem;
`;

export {StyledNavUl, StyledNavLi, StyledNavLink}