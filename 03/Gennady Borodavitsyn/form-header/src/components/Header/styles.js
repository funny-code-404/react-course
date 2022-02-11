import styled from 'styled-components';

const GREEN = 'green';

export const HeaderContainer = styled.header`
  margin: 1rem;
  padding: 2rem;
  font-size: 18px;
  border-radius: 20px;
  background-color: tan;

  & > :nth-child(1) {
    padding: 1rem;
    margin: 1rem;
    background-color: #ff9000;
    border-radius: 1rem;
  }

  & > :nth-child(2) {
    padding: 1rem;
    background-color: ${(props) => (props.isPrimary ? 'pink' : 'orange')};
    border-radius: 10px;
  }

  &:hover {
    background-color: ${GREEN};
  }

  & > :nth-child(2) > div {
    display: flex;
    justify-content: space-around;
  }

  h1,
  h2,
  h3 {
    margin-top: 0;
  }

  section {
    padding: 1rem 0;
    width: 30%;
    background-color: #ff7b00;
    border-radius: 20px;
  }

  article {
    margin: 1rem;
    padding: 2rem;
    border-radius: 1rem;
    background-color: #ff7b00;
  }

  button {
    align-items: center;
    appearance: none;
    background-clip: padding-box;
    background-color: initial;
    background-image: none;
    border-style: none;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    flex-direction: row;
    font-size: 16px;
    font-weight: 800;
    justify-content: center;
    line-height: 24px;
    margin: 0;
    min-height: 15px;
    outline: none;
    overflow: visible;
    padding: 10px 20px;
    pointer-events: auto;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    width: auto;
    word-break: keep-all;
    z-index: 0;

    &:before,
    &:after {
      border-radius: 80px;
    }

    &:before {
      background-color: rgba(249, 58, 19, 0.32);
      content: '';
      display: block;
      height: 100%;
      left: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -2;
    }

    &:after {
      background-color: initial;
      background-image: linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
      bottom: 4px;
      content: '';
      display: block;
      left: 4px;
      overflow: hidden;
      position: absolute;
      right: 4px;
      top: 4px;
      transition: all 100ms ease-out;
      z-index: -1;
    }

    &:hover:not(:disabled):after {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      transition-timing-function: ease-in;
    }

    &:active:not(:disabled) {
      color: #ccc;
    }

    &:active:not(:disabled):after {
      background-image: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.2)
        ),
        linear-gradient(92.83deg, #ff7426 0, #f93a13 100%);
      bottom: 4px;
      left: 4px;
      right: 4px;
      top: 4px;
    }

    &:disabled {
      cursor: default;
      opacity: 0.24;
    }
  }
`;
