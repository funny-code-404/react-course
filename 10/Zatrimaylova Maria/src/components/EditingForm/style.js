import styled from 'styled-components';

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const Input = styled.input`
  width: 90%;
  height: 30px;
  margin: 10px auto;
  padding: 10px;
  outline: none;
`;

export const Textarea = styled.textarea`
  width: 90%;
  height: 100px;
  margin: 10px auto;
  padding: 10px;
  outline: none;
  resize: none;
`;

export const Button = styled.button`
  margin-top: 10px;
`;