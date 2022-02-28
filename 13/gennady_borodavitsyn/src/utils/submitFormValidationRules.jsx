export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.name) {
    errors.name = 'Name is required';
  } else if (!/^.[a-zA-Z]{3,20}$/.test(values.name)) {
    errors.name = 'Name must contain min 3, max 20 letters';
  }

  return errors;
}
