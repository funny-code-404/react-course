import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    body {
        background: #c5c7c9;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    };

    button {
        background: none;
        outline: none;
        border: none;
    };
`;

export default GlobalStyles;