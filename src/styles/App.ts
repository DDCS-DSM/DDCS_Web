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

    button{
        border: 0;
        background-color: #F6F6F6;
        font-size: 1.1vw;
        padding: 0.6vw 4vw;
        border-radius: 0.4vw;
        font-weight: bold;
        cursor: pointer;
    }

    h1{
        font-size: 2.5vw;
        text-align: center;
    }

    ul{
        border-top: 0.2vw solid black;
        list-style: none;
        padding: 0;
    }

    input{
        outline: 0;
    }
`;

export default GlobalStyle;
