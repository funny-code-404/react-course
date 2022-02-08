import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class FormComp extends React.Component {
  render() {
    return (
      <Form className="col-md-6 m-5">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" placeholder="Brand" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" placeholder="Model" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" placeholder="Year of manufacture" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control type="text" placeholder="Price" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    )
  }
}

export default FormComp
