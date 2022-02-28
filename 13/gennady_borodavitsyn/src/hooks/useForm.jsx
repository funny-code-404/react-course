import { useEffect, useState } from 'react';

export const useForm = (submit, defaultValues, validate) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function onSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      submit(values);
    }
  }, [errors, isSubmitting, submit, values]);

  return { values, errors, onChange, onSubmit };
};
