import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #e1d3c1;
    color: #161513;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyles;