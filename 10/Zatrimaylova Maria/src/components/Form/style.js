import styled from 'styled-components';

export const FormContainer = styled.div`
  border: white solid 1px;
  border-radius: 15px;
  margin-top: 20px;
`;

export const StartContainer = styled.h4`
  text-align: center;
  padding: 40px 0;
`;

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