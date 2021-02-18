import styled, { createGlobalStyle, keyframes } from 'styled-components';

import background from './images/bg5.jpg';
import scrollBackground from './images/sbg.png';

const mainColor = 'rgba(57, 150, 54, 0.95)';

const fadeIn = keyframes`
    from {
        opacity: 0;
        scale: (0.9);
    }
    to {
        opacity: 1;
        scale: (1);
    }
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: url(${background}) no-repeat center/cover;
    font-family: 'Oldenburg', cursive;
    height: 100vh;
    font-size: 25px;
    li {
      list-style: none;
    }
    a {
      list-style: none;
      text-decoration: underline;
      color: black;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const BodyWrapper = styled.div`
  background: url(${scrollBackground}) no-repeat center/cover;
  animation: 2s ${fadeIn} linear;
  padding: 2rem 10rem;
`;


export { GlobalStyle, Wrapper, BodyWrapper, mainColor };