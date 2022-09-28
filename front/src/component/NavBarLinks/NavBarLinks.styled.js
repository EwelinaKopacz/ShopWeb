import styled, {css} from 'styled-components';

const StyledNavUl = styled.ul`
   height: 5.6rem;
   width: 23.4rem;
   align-self: flex-end;
   display: flex;
   align-items: flex-start;
   padding: 0px;
`;

const StyledNavLink = styled.a`
    display: inline-block;
    font-weight: var(--fw-regular);
    font-size: var(--fs-menu-link);
    font-style: normal;
    line-height: 19.2px;
    color:var(--clr-text);
    text-align: center;
    text-transform: uppercase;
    height: 2rem;
    cursor: pointer;

`;

const StyledNavLi = styled.li`
    height: 5.2rem;
    padding: 4px 16px;
    position: relative;
    cursor: pointer;

    &:hover {
        border-bottom: 2px solid var(--clr-primary);
        margin-bottom:-2px;
    }
    &:hover ${StyledNavLink} {
        color:var(--clr-primary);
        /* font-weight: var(--fw-semi-bold); */
    }
`;

export {StyledNavUl, StyledNavLi, StyledNavLink}