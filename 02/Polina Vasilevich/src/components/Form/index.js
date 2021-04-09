import React from "react";
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

    function validateName(name) {
      if (!(name.length > 3 && name.length < 30)) {
        errors["name"] = "The name must be between 3 and 30 characters long.";
        isValid = false;
      }
      return isValid;
    }

    function validateEmail(email) {
      if (!String(email).includes("@")) {
        isValid = false;
        errors["email"] = "The email must have symbol '@'.";
      } else if (!String(email).includes(".")) {
        isValid = false;
        errors["email"] = "The email must have symbol '.'";
      }

      return isValid;
    }

    function validatePassword(password) {
      if (password < 8) {
        isValid = false;
        errors["password"] = "The password must be more 8 symbols.";
      } else if (password) {
      }

      return isValid;
    }

    this.inputs.map(({ name, type }) => {
      if (!data[name]) {
        isValid = false;
        errors[name] = `Please enter ${name}`;
      } else {
        switch (type) {
          case "name":
            validateName(data[name]);
          case "email":
            validateEmail(data[name]);
          case "password":
            validatePassword(data[name]);
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

  handleClick = (e) => {
    e.preventDefault();

    if (this.validate()) {
      console.log(this.state.data);
    }
  };

  render() {
    const { inputs } = this.props;
    const { errors } = this.state;
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
