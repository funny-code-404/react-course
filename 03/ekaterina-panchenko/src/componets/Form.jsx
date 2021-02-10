import React from "react";
import styled from "styled-components";

class Form extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const resultFormData = {};

    for (const [name, value] of formData) {
      resultFormData[name] = value;
    }

    event.target.reset();
    this.props.handleSubmit(resultFormData);
  };

  render() {
    return (
      <FormContainer onSubmit={this.onSubmit}>
        {this.props.titles.map(({ name, text, id }) =>
          name === "number" ? null : (
            <Input
              required
              key={id}
              type="text"
              name={name}
              placeholder={text}
            />
          )
        )}
        <Button>Добавить</Button>
      </FormContainer>
    );
  }
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: auto;
  row-gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  width: 40%;
  margin: auto;
`;

export default Form;
