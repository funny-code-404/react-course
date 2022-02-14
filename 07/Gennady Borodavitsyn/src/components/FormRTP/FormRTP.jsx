/* eslint-disable */
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// components

const Div = styled.div`
  background-color: #6ca7e2;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
`;

function FormRTP({ render }) {
  const [value, setValue] = useState({
    surname: '',
    year: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  return (
    <>
      <Div>
        {render({
          name: 'any name',
          email: 'example@mail.com',
          pass: '1234567',
        })}
        <Form className="w-75 mx-auto" onSubmit={handleSubmit}>
          <h3>Registration:</h3>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSurname">
            <Form.Control
              type="text"
              name="surname"
              placeholder="surname"
              value={value.surname}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicYear">
            <Form.Control
              type="number"
              name="year"
              placeholder="year of birth"
              value={value.year}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Control
              type="phone"
              name="phoneNumber"
              placeholder="phone number"
              value={value.phoneNumber}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            register
          </Button>
        </Form>
      </Div>

      <Div>
        {render({
          name: 'any name',
          email: 'example@mail.com',
          pass: '1234567',
        })}
        <Form className="w-75 mx-auto">
          <h3>Entrance:</h3>
          <Form.Group className="mb-3" controlId="stayInSystem">
            <Form.Check type="checkbox" label="leave me logged in" />
          </Form.Group>

          <Button variant="primary" type="button">
            enter
          </Button>
        </Form>
      </Div>

      <Div>
        {render({
          name: 'any name',
          email: 'example@mail.com',
          pass: '1234567',
        })}

        <Form className="w-75 mx-auto ">
          <h3 className="mb-0">Account deleting:</h3>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label />
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="leave your feedback"
            />
          </Form.Group>

          <p>Rate the app performance:</p>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3  ">
              <Form.Check
                inline
                label="1"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="2"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="3"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="4"
                name="group1"
                type={type}
                id={`inline-${type}-4`}
              />
              <Form.Check
                inline
                label="5"
                name="group1"
                type={type}
                id={`inline-${type}-5`}
              />
            </div>
          ))}

          <Button variant="primary" type="button">
            send
          </Button>
        </Form>
      </Div>
    </>
  );
}

export default FormRTP;
