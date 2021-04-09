import React from "react";
import API from "./api";
import "./styles.scss";

class Form extends React.Component {
  state = {
    data: {},
    errors: {},
    isValid: true,
  };

  inputs = this.props.inputs;

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      data: { ...prevState.data, [name]: value },
    }));
  };

  validate() {
    const { data } = this.state;
    const errors = {};
    let isValid = true;

    this.inputs.map(({ name, type }) => {
      if (!data[name]) {
        errors[name] = `Please enter ${name}`;
        isValid = false;
      } else {
        switch (type) {
          case "name": {
            if (!(data[name].length > 3 && data[name].length < 30)) {
              errors["name"] =
                "The name must be between 3 and 30 characters long.";
              isValid = false;
            }
            break;
          }
          case "email": {
            if (!String(data[name]).includes("@")) {
              errors["email"] = "The email must have symbol '@'.";
              isValid = false;
            } else if (!String(data[name]).includes(".")) {
              errors["email"] = "The email must have symbol '.'";
              isValid = false;
            }
            break;
          }

          case "password": {
            if (data[name] < 7) {
              errors["password"] =
                "Password must be at least 8 characters long.";
              isValid = false;
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
      isValid,
    }));

    return isValid;
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

    if (this.validate()) {
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
