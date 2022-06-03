import { useForm } from '../../hooks/useForm';
import './style.scss';
const validation = {
  email: (value) => {
    const reg =
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    if (!reg.test(value)) return value;
  },
  name: (value) => {
    if (value.length <= 2 || value.length > 15) {
      return value;
    }
  },
};

export const Form = ({ submit }) => {
  const { values, errors, onChange, onSubmit, emptyInput } = useForm(
    submit,
    {
      email: '',
      name: '',
    },
    validation
  );

  return (
    <form onSubmit={onSubmit}>
      <label>
        <input
          name="email"
          placeholder="email"
          onChange={onChange}
          value={values.email}
        />
        {errors.email && <span>Wrong email</span>}
        {emptyInput.isEmpty && !values.email && <p>Enter email</p>}
      </label>
      <label>
        <input
          name="name"
          placeholder="name"
          onChange={onChange}
          value={values.name}
        />
        {errors.name && (
          <span>The name must be between 3 and 15 characters.</span>
        )}
        {emptyInput.isEmpty && !values.name && <p>Enter name</p>}
      </label>
      <button>Submit</button>
    </form>
  );
};
