import styled from "styled-components";

export const Form = styled.form`
  margin: 40px auto;

  width: 80%;
  display: flex;
  justify-content: space-between;

  position: relative;
`;

export const TextTask = styled.input`
  padding: 20px;
  width: 100%;

  outline: none;

  font-size: 1.2em;

  border: 2px solid #d0d7df;

  &.error {
    border: 2px solid red;
  }
`;

export const Button = styled.button`
  width: 10%;
  font-size: 1.3em;

  outline: none;
  border: none;

  background-color: #4f999e;
  color: #fff;

  :hover {
    cursor: pointer;
  }

  :active {
    background-color: #47898d;
  }
`;

export const Error = styled.span`
  padding-left: 20px;
  position: absolute;
  bottom: -25px;
  color: red;
  font-size: 1em;
`;
