import { useState } from 'react';

const useForm = () => {
  const [value, setValue] = useState('');
  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleClick = () => {
    setFormData([...formData, value]);
    setValue('');
  }

  return {
    value,
    formData,
    handleChange,
    handleClick
  }
}

export default useForm;
