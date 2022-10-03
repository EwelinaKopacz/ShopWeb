import styled from 'styled-components';

const StyledProductDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    cursor: pointer;
    &:hover{
        filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
    }
`;

const StyledProductCardDiv = styled.div`
    border:.5px solid blue;
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    align-self: stretch;
    padding: 1.6rem;
    background-color: var(--clr-white);
    &:hover{
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
`;

const StyledProductImgDiv = styled.div`
    border:.5px solid blue;
    height: 330px;
    align-self: stretch;
    margin-bottom: 2.4rem;

    &:hover{
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
`;

const StyledProductImg = styled.img`
    min-width: 100%;
    max-height: 100%;
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

const StyledCartBtn = styled.div`
    position: absolute;
    width: 52px;
    height: 52px;
    right: 20px;
    bottom: 70px;

    filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
`;

const StyledOverlayOutOfStock = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: -5px;
    opacity: 0.5;
    background-color: var(--clr-white);
`;

const StyledOverlayOutOfStockText = styled.span`
    position: absolute;
    left: 23%;
    right: 23%;
    top: 35%;
    bottom: 50%;

    text-transform: uppercase;
    font-style: normal;
    font-weight: var(--fw-regular);
    font-size: var(--fs-text-outofstock);
    line-height: 38px;
    color: var(--clr-text-outofstock);

`;


export { StyledProductDiv, StyledProductCardDiv, StyledProductImgDiv, StyledProductImg, StyledProductContentDiv, StyledProductName, StyledProductPrice,StyledCartBtn, StyledOverlayOutOfStock,StyledOverlayOutOfStockText };