import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "League Spartan", sans-serif;
    }

    .color_transition{
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 400ms;
    }
    
    .opacity_0 {
        transition: opacity 0.1s;
        opacity: 0;
    }
    
    .opacity_100 {
        transition: opacity 0.1s;
        opacity: 100;
    }
`;
