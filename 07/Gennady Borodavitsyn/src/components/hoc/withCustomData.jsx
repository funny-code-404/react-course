/* eslint-disable */

export const withCustomData = (Form) => (props) => {
  return (
    <Form
      {...props}
      data={{
        name: 'Ivan',
        surname: 'Ivanov',
        email: 'example_email@gmail.com',
        pass: '12345678',
      }}
    />
  );
};
