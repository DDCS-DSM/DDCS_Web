import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        margin: 0;
        padding: 0;

        min-width: 100vw;
        min-height: 100vh;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    img {
        user-select: none;
        -webkit-user-drag: none;
    }
`;

export default GlobalStyle;
