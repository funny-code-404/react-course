import React from "react";
import { FormContainer, InputContainer } from "./styles";
import { isInvalid, text, title, formAlert, stringName, stringPassword, stringEmail } from "./consts";
import "animate.css";

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    errors: {
      name: false,
      email: false,
      password: false,
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    this.handleValid(name, value);
  };

  handleValid = (name, value) => {
    if (
      (name === "name" && value.length >= 3 && value.length <= 30) ||
      (name === "email" && value.match(/.+@.+\..+/i)) ||
      (name === "password" &&
        value.length > 8 &&
        value.match(/[A-Z]/g) &&
        value.match(/[0-9]/g))
    ) {
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, [name]: false },
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, [name]: true },
      }));
    }
  };

  handleClick = (e) => {
    const { errors, ...rest } = this.state;
    e.preventDefault();
    if (
      !errors.name &&
      !errors.email &&
      !errors.password &&
      rest.name &&
      rest.email &&
      rest.password
    ) {
      console.log(JSON.stringify(rest));
    } else {
      alert(formAlert);
    }
  };

  render() {
    const { name, email, password, errors } = this.state;
    return (
      <FormContainer>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
          <InputContainer
            value={name}
            className={errors.name ? "error" : ""}
            name="name"
            onChange={this.handleChange}
            placeholder={stringName}
            type={stringName}
          />
          {errors.name ? <p> {stringName} {isInvalid} </p> : ""}
          <InputContainer
            value={email}
            className={errors.email ? "error" : ""}
            name="email"
            onChange={this.handleChange}
            placeholder={stringEmail}
            type={stringEmail}
          />
          {errors.email ? <p> {stringEmail} {isInvalid} </p> : ""}
          <InputContainer
            value={password}
            className={errors.password ? "error" : ""}
            name="password"
            onChange={this.handleChange}
            placeholder={stringPassword}
            type={stringPassword}
          />
          {errors.password ? <p> {stringPassword} {isInvalid} </p> : ""}
          <button
            onClick={this.handleClick}
            className="animate__bounceOut"
            type="submit"
          >
            <p>Log in</p>
          </button>
        </div>
      </FormContainer>
    );
  }
}

export default Form;
