import styled from "styled-components";
import "animate.css";

export const InputContainer = styled.input`
  display: flex;
  width: 405px;
  height: 48px;
  border-radius: 12px;
  background-color: rgba(255, 245, 245, 0.623);
  box-shadow: inset 1px 1px 3px 1px rgba(255, 245, 245, 0.082);
  

  :hover {
    border-color: rgb(30, 163, 240);
  }
  border: 1px solid rgb(234, 236, 239);
  :nth-child(3) {
    margin-bottom: 20px;
  }
  :nth-child(5) {
    margin-top: 20px;
  }
`;

export const FormContainer = styled.form`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  width: 410px;
  padding: 20px 10px 70px 10px;
  margin: auto;
  margin-top: 120px;
  display: flex;
  background: linear-gradient(to top left, powderblue, rgb(255, 192, 203));
  border-radius: 15px;
  box-shadow: 4px 4px 4px 2px rgb(238, 238, 238);

  div {
    margin: auto;
    h1 {
      font-weight: bold;
      margin-bottom: 5px;
    }
    p {
      margin-bottom: 30px;
      margin-top: 5px;
    }
  }

  button {
    width: 405px;
    margin-top: 30px;
    background-color: rgba(30, 163, 240, 0.76);
    border: none;
    border-radius: 12px;
    height: 48px;
    box-shadow: 1px 1px 1px 1px rgba(153, 198, 216, 0.411);
    cursor: pointer;

    :hover {
      background-color: rgb(30, 163, 240);
    }

    p {
      margin: auto;
      font-weight: bold;
      font-size: medium;
    }
  }
`;
