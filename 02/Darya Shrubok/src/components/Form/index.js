import "./styles.css";
import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    errors: {
      name: true,
      email: true,
      password: true,
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    this.handleValidation(e);
  };

  handleClick = (e) => {
    const { name, email, password, errors } = this.state;
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Все поля должны быть заполнены");
      return;
    }
    for (let i in errors) {
      if (!errors[i]) {
        return;
      }
    }
    console.log(`name: ${name}, email: ${email}, password: ${password}`);
  };

  handleValidation = (e) => {
    const regs = {
      name: /^([A-Z]{1}[a-z]{2,29})$/,
      email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
      password: /^(?=.*[0-9])(?=.*[a-z])(?=\S+$).{8,}$/,
    };

    switch (e.target.name) {
      case "name":
        this.validateField(regs.name, e.target);
        break;
      case "email":
        this.validateField(regs.email, e.target);
        break;
      case "password":
        this.validateField(regs.password, e.target);
        break;
    }
  };

  handleErrors = (field, error) => {
    this.setState((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [field]: error,
      },
    }));
  };

  validateField(reg, input) {
    const { name, value } = input;
    const isValid = reg.test(value.trim());
    this.handleErrors(name, isValid);
  }

  render() {
    const { name, email, password, errors } = this.state;
    return (
      <div className="form__wrapper">
        <form>
          {errors.name || (
            <small>Имя должно содержать от 3 до 30 символов</small>
          )}
          <input
            value={name}
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
            className={errors.name ? "" : "error"}
          />
          {errors.email || <small>Некорректный формат email</small>}
          <input
            value={email}
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
            className={errors.email ? "" : "error"}
          />
          {errors.password || (
            <small>
              Пароль должен содержать минимум 8 символов и хотя бы одну цифру
            </small>
          )}
          <input
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
            className={errors.password ? "" : "error"}
          />
          <button onClick={this.handleClick} className="send__button">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
