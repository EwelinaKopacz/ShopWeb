import styled from 'styled-components';

const StyledCurrWrapper = styled.div`
   width: 38px;
   height: 29px;
   display: flex;
`;

const StyledCurrBox = styled.div`
   width: 32px;
   display: flex;
   justify-content: center;
   padding: 0 1rem;
`;

const StyledCurrSymbol = styled.p`
    font-style: normal;
    font-weight: var(--fw-medium);
    font-size: var(--fs-prod-details);
    line-height: 160%;
    color:var(--clr-text);
`;

const StyledCurrModal = styled.div`
    position: relative;
    cursor: pointer;

    svg {
        position: absolute;
        width: 8px;
        height: 8px;
        left: 0%;
        right: 20.59%;
        top:45%;
        bottom: 38%;
        font-weight: 600;
    }
`;

const StyledCurrOptions = styled.ul`
    position: absolute;
    top:65px;
    left:991px;
    display: flex;
    flex-direction:column;
    align-items: center;
    min-width: 11.4rem;
    padding:2rem 0;
    gap:1rem;
    height: auto;
    background-color: var(--clr-white);
    filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
    display:${
        props => props.active ? 'flex' : 'none'
    }
`;

const StyledCurrOptionsItems = styled.li`
    width:100%;
    height: 4.5rem;
    align-self: flex-start;
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 1rem;

    &:hover {
        background-color: var(--clr-hover-curr);
    }
`;

const StyledCurrOptionsSymbol = styled(StyledCurrSymbol)`
    padding-left:2rem;
    text-align: right;
`;

const StyledCurrOptionsLabel = styled(StyledCurrSymbol)`
    text-align: right;
`;

export { StyledCurrWrapper, StyledCurrBox, StyledCurrSymbol, StyledCurrModal, StyledCurrOptions, StyledCurrOptionsItems, StyledCurrOptionsSymbol, StyledCurrOptionsLabel };