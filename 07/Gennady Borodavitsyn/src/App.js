/* eslint-disable */
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import styled from 'styled-components';

// components
import FormComp from './components/Form/Form.jsx';
import FormRTP from './components/FormRTP/FormRTP';

const Div = styled.div`
  padding: 1rem;
  margin: 2rem 10rem;
  background-color: #d1e8ff;
  border-radius: 10px;
`;

function App() {
  return (
    <Div className="App">
      <FormComp />
      <FormRTP
        render={(props) => {
          const [values, setValues] = useState({
            data: {
              name: props.name,
              email: props.email,
              pass: props.pass,
            },
          });

          const handleChange = (e) => {
            setValues({
              ...values,
              [e.target.name]: e.target.value,
            });
          };

          return (
            <div>
              <Form className="w-75 mx-auto pt-2">
                <Form.Group className="mb-3" controlId={nanoid()}>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Username"
                    value={values.data.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId={nanoid()}>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={values.data.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId={nanoid()}>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.data.pass}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
            </div>
          );
        }}
      />
    </Div>
  );
}

export default App;
