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

const StyledCurrArrow = styled.div`
    position: relative;

    svg{
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

export { StyledCurrWrapper, StyledCurrBox, StyledCurrSymbol, StyledCurrArrow };