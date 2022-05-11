import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar {
        width: 1.5vh;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 1.5vh;
        box-shadow: inset 0 0 1.5vh #a1a1a1;
    }

    html {
        margin: 0;
        padding: 0;

        max-width: 100vw;
        max-height: 100vh;

        overflow: overlay;
        overflow-x: hidden;
    }

    img {
        user-select: none;
        -webkit-user-drag: none;
    }

    input, select{
        outline: 0;
        :hover{
            cursor: pointer;
        }
    }
`;

export default GlobalStyle;
