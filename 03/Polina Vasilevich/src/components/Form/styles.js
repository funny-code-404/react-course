import styled from "styled-components";

export const Form = styled.form`
  width: 50%;
  min-width: 330px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;

  padding: 20px;

  background: #fff;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const FormContainer = styled.div`
  margin-bottom: 20px;
`;
export const Input = styled.input`
  margin-bottom: 10px;

  display: block;
  width: 100%;
  padding-left: 20px;
  height: 55px;
  font-size: 1.2em;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  background: 0 0;

  line-height: 1.2;

  outline: none;

  &:hover,
  &:focus {
    border: 1px solid #57b846;
    border-radius: 3px;
  }

  &.notValid {
    border: 1px solid red;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0 20px;

  height: 55px;

  font-size: 1.2em;
  color: #fff;
  line-height: 1.2;
  font-weight: bold;

  border-radius: 10px;
  background-color: #009879;
  transition: all 0.4s;

  outline: none;
  border: none;

  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const Error = styled.span`
  color: red;
  font-weight: bold;
`;
