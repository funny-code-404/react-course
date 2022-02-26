import { useContext } from 'react';
import { FormContext } from '../../context/formContext/context';
import styled from 'styled-components';

const FormStyled = styled.form`
  margin: 2rem;
`;

function Form() {
  const { onChange, onSubmit, value } = useContext(FormContext);

  return (
    <FormStyled onSubmit={onSubmit}>
      <input
        type="text"
        name="todo"
        value={value}
        placeholder="write any ToDo"
        onChange={onChange}
      />
      <button>add ToDo</button>
    </FormStyled>
  );
}

export default Form;
