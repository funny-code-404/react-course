import React, { Component } from "react";
import { Form, FormContainer, Input, Button, Error } from "./styles";
class FormComponent extends Component {
  render() {
    return (
      <Form onChange={this.props.onChange}>
        {this.props.inputs.map(({ id, name, type, playceholder }) => (
          <FormContainer>
            <Input
              key={id}
              name={name}
              type={type}
              placeholder={playceholder}
              className={this.props.errors[name] && "notValid"}
              value={this.props.dataForm[name]}
            />
            {this.props.errors[name] && (
              <Error>{this.props.errors[name]}</Error>
            )}
          </FormContainer>
        ))}
        <Button onClick={this.props.onClick}>Add</Button>
      </Form>
    );
  }
}

export default FormComponent;
