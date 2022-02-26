import { useState } from 'react';
import { FormContext } from './context';
import { nanoid } from 'nanoid';

export const FormContextProvider = ({ children }) => {
  const [value, setValue] = useState('');
  const [list, updateList] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateList([...list, { body: value, id: nanoid() }]);
    e.target.reset();
  };

  const onDeleteClick = (id) => {
    updateList(list.filter((item) => item.id !== id));
  };

  return (
    <FormContext.Provider value={{ list, onChange, onSubmit, onDeleteClick }}>
      {children}
    </FormContext.Provider>
  );
};
