import React from "react";
import API from "./api";
import "./styles.scss";

class Form extends React.Component {
  state = {
    data: {},
    errors: {},
  };

  inputs = this.props.inputs;

  handleChange = (e) => {
    const { errors } = this.state;
    const { name, value } = e.target;

    if (errors[name]) {
      errors[name] = "";
    }

    this.setState((prevState) => ({
      ...prevState,
      data: { ...prevState.data, [name]: value },
      errors,
    }));
  };

  validateForm() {
    const { data } = this.state;
    const errors = {};

    this.inputs.map(({ name }) => {
      if (!data[name]) {
        errors[name] = `Please enter ${name}`;
      } else {
        switch (name) {
          case "name":
            if (!(data[name].length >= 3 && data[name].length <= 30)) {
              errors.name = "Name must be between 3 and 30 characters long.";
            }
            break;

          case "email":
            const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regEmail.test(String(data[name]).toLocaleLowerCase())) {
              errors.email = "Email is not valid.";
            }
            break;

          case "password": {
            if (data[name].length < 7) {
              errors.password = "Password must be at least 8 characters long.";
            } else if (
              !(/\d/.test(data[name]) && /[a-zA-Z]/.test(data[name]))
            ) {
              errors.password = "Password must contain letters and numbers.";
            }
            break;
          }
          default:
            break;
        }
      }
    });

    this.setState((prevState) => ({
      ...prevState,
      errors,
    }));

    return !Object.keys(errors).length ? true : false;
  }

  clearForm() {
    const data = {};
    this.inputs.map(({ name }) => (data[name] = ""));
    this.setState((prevState) => ({
      ...prevState,
      data,
      isValid: true,
    }));
  }

  handleClick = (e) => {
    e.preventDefault();
    const { data } = this.state;

    if (this.validateForm()) {
      API.post("posts", { data })
        .then((result) => console.log(result.data))
        .catch((error) => console.log(error));

      this.clearForm();
    }
  };

  render() {
    const { inputs } = this.props;
    const { data, errors } = this.state;
    return (
      <form className="form" onChange={this.handleChange}>
        <h2 className="form__title">ACCOUNT LOGIN</h2>
        {inputs.map(({ id, type, name, placeholder }) => (
          <div className="form__container">
            <input
              key={id}
              type={type}
              name={name}
              placeholder={placeholder}
              value={data[name]}
              className={`form__input ${errors[name] && "notValid"}`}
            />
            {errors[name] && (
              <span className="form__errors">{errors[name]}</span>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="form__button"
          onClick={this.handleClick}
        >
          Login
        </button>
      </form>
    );
  }
}

export default Form;
