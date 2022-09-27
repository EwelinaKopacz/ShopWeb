import styled from 'styled-components';

const StyledProductCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 1.6rem;
    background-color: var(--clr-white);

`;

const StyledProductImgDiv = styled.div`
    width: 100%;
    height: 350px;
    margin-bottom: 2.4rem;

`
const StyledProductImg = styled.img`
    width: 100%;
    height:100%;
    object-fit: contain;
`;

const StyledProductContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 5.8rem;
`;

const StyledProductName = styled.p`
    font-style: normal;
    font-weight: var(--fw-light);
    font-size: var(--fs-prod-details);
    line-height: 160%;
    color: var(--clr-text);
`;

const StyledProductPrice = styled.p`
    font-style: normal;
    font-weight: var(--fw-medium);
    font-size: var(--fs-prod-details);
    line-height: 160%;
    color: var(--clr-text);
    text-align: right;
`;


export { StyledProductCardDiv, StyledProductImgDiv, StyledProductImg, StyledProductContentDiv, StyledProductName, StyledProductPrice };