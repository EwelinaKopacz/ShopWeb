import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html {
        height:100%;
        font-size: 62.5%;
        --site-width-max:1440px;
        --site-width-min:320px;

        // colors
        --clr-primary:#5ECE7B;
        --clr-white:#FFFFFF;
        --clr-black:#000000;
        --clr-info-variant:#B4D2F4;
        --clr-text:#1D1F22;
        --clr-shop-icon:#43464E;
        --clr-text-outofstock:#8D8F9A;
        --clr-logo-bg:#1DCF65;

        // fonts weight
        --fw-regular:400;
        --fw-light:300;
        --fw-medium:500;
        --fw-semi-bold:600;

        // fonts size
        --fs-cat-name:4.2rem;
        --fs-menu-link: 1.6rem;
        --fs-prod-details: 1.8rem;
        --fs-text-outofstock:2.4rem;

        font-family: 'Raleway',sans-serif;
        scroll-behavior: smooth;
        overflow-y: scroll;
    }

    body {
        min-height: 100%;
        font-size: 1.6rem;
        color:var(--clr-black);
        background-color: var(--clr-white);
    }

    button {
        cursor:pointer;
    }

`

export default GlobalStyle;