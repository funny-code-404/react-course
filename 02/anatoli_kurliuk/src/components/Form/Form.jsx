import React from "react";
import "./style.css";
import {
  HEADER,
  MAIL,
  MAIL_TEXT_ERROR,
  NAME,
  NAME_TEXT_ERROR,
  PASSWORD,
  PASSWORD_TEXT_ERROR,
  regexp_MAIL,
  regexp_NAME,
  regexp_PASSWORD,
} from "./config";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      mail: "",
      password: "",
      validateName: true,
      validateMail: true,
      validatePassword: true,
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    const {
      name,
      mail,
      password,
      validateName,
      validateMail,
      validatePassword,
    } = this.state;

    if (validateName && validateMail && validatePassword) {
      this.setState((prevState) => ({
        ...prevState,
        name: "",
        mail: "",
        password: "",
      }));
    }
  };

  handleChange = (event) => {
    const key = event.target.name;
    const inputValue = event.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [key]: inputValue,
    }));
    !this.state.validateName && this.validateName(event);
    !this.state.validateMail && this.validateMail(event);
    !this.state.validatePassword && this.validatePassword(event);
  };

  validateName = (event) => {
    if (event.target.name === NAME) {
      this.setState((prevState) => ({
        ...prevState,
        validateName: regexp_NAME.test(event.target.value),
      }));
    }
  };

  validateMail = (event) => {
    if (event.target.name === MAIL) {
      this.setState((prevState) => ({
        ...prevState,
        validateMail: regexp_MAIL.test(event.target.value),
      }));
    }
  };

  validatePassword = (event) => {
    if (event.target.name === PASSWORD) {
      this.setState((prevState) => ({
        ...prevState,
        validatePassword: regexp_PASSWORD.test(event.target.value),
      }));
    }
  };

  render() {
    const {
      name,
      mail,
      password,
      validateName,
      validateMail,
      validatePassword,
    } = this.state;
    return (
      <form>
        <h1>{HEADER}</h1>
        <label>
          <input
            className={validateName ? "" : "error"}
            type="text"
            name={NAME}
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
            onBlur={this.validateName}
          />
          {!validateName && <span className="errorText">{NAME_TEXT_ERROR}</span>}
        </label>

        <label>
          <input
            className={validateMail ? "" : "error"}
            type="email"
            name={MAIL}
            placeholder="E-Mail"
            value={mail}
            onChange={this.handleChange}
            onBlur={this.validateMail}
          />
          {!validateMail && (
            <span className="errorText">{MAIL_TEXT_ERROR}</span>
          )}
        </label>

        <label>
          <input
            className={validatePassword ? "" : "error"}
            type="password"
            name={PASSWORD}
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            onBlur={this.validatePassword}
          />
          {!validatePassword && (
            <span className="errorText">{PASSWORD_TEXT_ERROR}</span>
          )}
        </label>

        <button onClick={this.handleClick}>Send</button>
      </form>
    );
  }
}

export default Form;
