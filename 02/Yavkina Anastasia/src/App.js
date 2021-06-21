import React from "react";
import "./App.css";

const NAME_KEY = "name";
const EMAIL_KEY = "email";
const PASSWORD_KEY = "password";

const NAME_ERROR = "Первая буква должна быть заглавной";
const EMAIL_ERROR = "email должен содержать символ @ и .";
const PASSWORD_ERROR = "Ошибка! Необходимо ввести не менее 8 символов";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        [NAME_KEY]: "",
        [EMAIL_KEY]: "",
        [PASSWORD_KEY]: "",
      },
      validForms: {
        [NAME_KEY]: "",
        [EMAIL_KEY]: "",
        [PASSWORD_KEY]: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { ...inputs } = this.state;

    console.log({
      [NAME_KEY]: inputs[NAME_KEY],
      [EMAIL_KEY]: inputs[EMAIL_KEY],
      [PASSWORD_KEY]: inputs[PASSWORD_KEY],
    });
  };

  handleChange = (e) => {
    const key = e.target.name;
    const inputValue = e.target.value;

    this.setState(
      {
        [key]: inputValue,
      },
      () => {
        this.validateField(key, inputValue);
      }
    );
  };

  validateField(fieldName, fieldValue) {
    const values = this.state.validForms;
    switch (fieldName) {
      case NAME_KEY:
        values[fieldName] =
          fieldValue[0] === fieldValue[0].toUpperCase() ? "" : NAME_ERROR;
        break;

      case EMAIL_KEY:
        values[fieldName] =
          fieldValue.includes("@") && fieldValue.includes(".")
            ? ""
            : EMAIL_ERROR;
        break;

      case PASSWORD_KEY:
        values[fieldName] = fieldValue.length > 8 ? "" : PASSWORD_ERROR;
        break;

      default:
        values[fieldName] = "";
        break;
    }
  }

  render() {
    const { ...values } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <span>{values.validForms[NAME_KEY]}</span>
        <input
          placeholder="name"
          name={NAME_KEY}
          value={values[NAME_KEY]}
          onChange={this.handleChange}
        />
        <span>{values.validForms[EMAIL_KEY]}</span>
        <input
          placeholder="email"
          name={EMAIL_KEY}
          value={values[EMAIL_KEY]}
          onChange={this.handleChange}
        />
        <span>{values.validForms[PASSWORD_KEY]}</span>
        <input
          placeholder="password"
          name={PASSWORD_KEY}
          value={values[PASSWORD_KEY]}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
