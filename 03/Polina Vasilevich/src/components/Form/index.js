import React, { Component } from "react";
import { Form, FormContainer, Input, Button, Error } from "./styles";
class FormComponent extends Component {
  state = {
    dataForm: {},
    errors: {},
  };

  handleChange = (e) => {
    const { errors } = this.state;
    const { name, value } = e.target;

    if (errors[name]) {
      errors[name] = "";
    }

    this.setState((prevState) => ({
      ...prevState,
      dataForm: {
        ...prevState.dataForm,
        [name]: value,
      },
      errors,
    }));
  };

  validateForm() {
    const dataForm =
      this.props.dataForm !== null ? this.props.dataForm : this.state.dataForm;

    const errors = {};

    this.props.inputs.map(({ name }) => {
      if (!dataForm[name]) {
        errors[name] = `Please enter ${name}.`;
      }
    });

    this.setState((prevState) => ({
      ...prevState,
      errors,
    }));

    return !Object.keys(errors).length;
  }

  clearForm() {
    const dataForm = {};

    this.props.inputs.map(({ name }) => (dataForm[name] = ""));

    this.setState((prevState) => ({
      ...prevState,
      dataForm,
    }));
  }

  handleClick = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.props.onClick(this.state.dataForm);
      this.clearForm();
    }
  };

  render() {
    const { dataForm, errors } = this.state;
    return (
      <Form onChange={this.handleChange}>
        {this.props.inputs.map(({ id, name, type, playceholder }) => (
          <FormContainer key={id}>
            <Input
              name={name}
              type={type}
              placeholder={playceholder}
              className={errors[name] && "notValid"}
              value={
                this.props.dataForm !== null
                  ? this.props.dataForm[name]
                  : dataForm[name]
              }
            />
            {errors[name] && <Error>{errors[name]}</Error>}
          </FormContainer>
        ))}
        <Button onClick={this.handleClick}>Add</Button>
      </Form>
    );
  }
}

export default FormComponent;
