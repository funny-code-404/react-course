import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 33%;
  margin: 0 auto;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
  border-radius: 2rem;

  label {
    margin-right: 1rem;
  }

  p {
    position: absolute;
    top: 40%;
    left: 15%;
    color: red;
  }

  button {
    margin: 1rem;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;
