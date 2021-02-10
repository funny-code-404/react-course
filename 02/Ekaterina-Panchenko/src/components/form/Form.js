import React from "react";
import "./form.css";

const INPUTS = {
  name: "name",
  email: "email",
  password: "password",
};

class Form extends React.Component {
  state = {
    data: {
      [INPUTS.name]: "",
      [INPUTS.email]: "",
      [INPUTS.password]: "",
    },
    validation: {
      [INPUTS.name]: true,
      [INPUTS.email]: true,
      [INPUTS.password]: true,
    },
  };

  hundleChange = (event) => {
    this.setState((prevSate) => ({
      data: {
        ...prevSate.data,
        [event.target.name]: event.target.value,
      },
    }));
  };

  hundleChangeValidation = (name) => {
    this.setState((prevSate) => ({
      validation: {
        ...prevSate.validation,
        [name]: false,
      },
    }));
  };

  validateName(name) {
    return name.length > 2 && name.length < 31;
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePassword(password) {
    const re = /(?=.*\d)(?=.*[a-z]).{8,}/;
    return re.test(String(password));
  }

  sendData = (event) => {
    event.preventDefault();

    this.setState({
      validation: {
        [INPUTS.name]: true,
        [INPUTS.email]: true,
        [INPUTS.password]: true,
      },
    });

    if (!this.validateName(this.state.data[INPUTS.name])) {
      this.hundleChangeValidation(INPUTS.name);
      return;
    }

    if (!this.validateEmail(this.state.data[INPUTS.email])) {
      this.hundleChangeValidation(INPUTS.email);
      return;
    }
    if (!this.validatePassword(this.state.data[INPUTS.password])) {
      this.hundleChangeValidation(INPUTS.password);
      return;
    }
    console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <form>
          <input
            name={INPUTS.name}
            value={this.state.data[INPUTS.name]}
            placeholder="name"
            onChange={this.hundleChange}
          />
          {!this.state.validation[INPUTS.name] && (
            <p>Имя короче 3 символов или длиннее 30</p>
          )}
          <input
            name={INPUTS.email}
            value={this.state.data[INPUTS.email]}
            placeholder="email"
            onChange={this.hundleChange}
          />
          {!this.state.validation[INPUTS.email] && (
            <p>email не содержит символов @ или точки</p>
          )}

          <input
            name={INPUTS.password}
            value={this.state.data[INPUTS.password]}
            placeholder="password"
            onChange={this.hundleChange}
          />
          {!this.state.validation[INPUTS.password] && (
            <p>пароль не содержит цифру или букву, либо короче 8 символов</p>
          )}

          <button onClick={this.sendData}>Click</button>
        </form>
      </div>
    );
  }
}

export default Form;
