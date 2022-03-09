import { useState } from 'react';

export const useForm = (submit, defaultValues, validation) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultValues);
  const [emptyInput, setEmptyInput] = useState({ isEmpty: false });

  const onChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    setErrors((prevState) => ({
      ...prevState,
      [e.target.name]: validation[e.target.name](e.target.value),
    }));
  };

  const errorsCondition =
    Object.values(errors).filter((error) => !error).length ===
    Object.keys(values).length;

  const checkInput = () => {
    const condition = Object.values(values).filter((value) => !value).length;

    if (condition !== 0) {
      setEmptyInput({ isEmpty: true });
    } else {
      setEmptyInput({ isEmpty: false });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    checkInput();

    if (errorsCondition && !emptyInput.isEmpty) {
      submit(values);
      setValues(defaultValues);
    }
  };

  return { values, errors, onChange, onSubmit, emptyInput };
};
