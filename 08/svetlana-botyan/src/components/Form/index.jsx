import { useContext } from 'react';
import { FormContext } from '../../context/context';
import Input from '../Input';
import './style.scss';

const Form = () => {
  const { NAMES, input, onChange, onSubmit } =
    useContext(FormContext);

  return (
    <form onSubmit={onSubmit}>
      <Input
        name={NAMES.task}
        onChange={onChange}
        value={input.value}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
