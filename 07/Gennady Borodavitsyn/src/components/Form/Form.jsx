/* eslint-disable */
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import { withCustomData } from '../hoc/withCustomData.jsx';

const Div = styled.div`
  background-color: #6ca7e2;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
`;

function FormComp({ data }) {
  const [inputs, setValue] = useState(data || '');

  const handleChange = (e) => {
    setValue({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Div>
        <h4>Form with hoc:</h4>
        <Form className="w-50 mx-auto">
          <Form.Group className="mb-3" controlId="formBasicUsernameHoc">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Username"
              value={inputs.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSurnameHoc">
            <Form.Label>Surname:</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              placeholder="Surname"
              value={inputs.surname}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmailHoc">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={inputs.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordHoc">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={inputs.pass}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Div>
    </>
  );
}

export default withCustomData(FormComp);
