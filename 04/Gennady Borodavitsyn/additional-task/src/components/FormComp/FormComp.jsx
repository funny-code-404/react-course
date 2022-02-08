import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class FormComp extends React.Component {
  render() {
    const {
      handleSubmit,
      handleChange,
      newBrand,
      newModel,
      newYear,
      newPrice,
    } = this.props

    return (
      <Form className="col-md-6 m-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            type="text"
            placeholder="Brand"
            onChange={handleChange}
            name="brand"
            value={newBrand}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            type="text"
            placeholder="Model"
            onChange={handleChange}
            name="model"
            value={newModel}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            type="text"
            placeholder="Year of manufacture"
            onChange={handleChange}
            name="year"
            value={newYear}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            type="text"
            placeholder="Price"
            onChange={handleChange}
            name="price"
            value={newPrice}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    )
  }
}

export default FormComp
