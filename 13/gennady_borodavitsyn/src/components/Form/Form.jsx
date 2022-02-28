import validate from '../../utils/submitFormValidationRules';
import { useForm } from '../../hooks/useForm';
import { FormStyled, InputContainer } from './styles';

function Form({ submit }) {
  const { values, errors, onChange, onSubmit } = useForm(
    submit,
    {
      name: '',
      email: '',
    },
    validate
  );

  return (
    <FormStyled onSubmit={onSubmit} noValidate>
      <h2>FORM:</h2>
      <InputContainer>
        <label htmlFor="email">EMAIL:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email"
          onChange={onChange}
          value={values.email}
          required
        />
        {errors.email && <p>{errors.email}</p>}
      </InputContainer>

      <InputContainer>
        <label htmlFor="name">NAME:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          onChange={onChange}
          value={values.name}
          required
        />
        {errors.name && <p>{errors.name}</p>}
      </InputContainer>

      <button>submit</button>
    </FormStyled>
  );
}

export default Form;
