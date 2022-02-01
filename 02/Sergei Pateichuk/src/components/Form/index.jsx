import React from "react";
import "./style.css";

class Form extends React.Component {
  state = {
    values: {
      name: "",
      email: "",
      password: "",
    },
    errors: {
      name: "",
      email: "",
      password: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.value,
        [e.target.name]: e.target.values,
      },
    }));
  };

  handleName = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (e.target.value.length < 3 || e.target.value.length > 30) {
      this.state.errors.name = "Некорректное имя";
    } else {
      this.state.errors.name = "";
    }
  };

  handleEmail = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    const validEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!validEmail.test(String(e.target.value).toLowerCase())) {
      this.state.errors.email = "Некорректный email";
    } else {
      this.state.errors.email = "";
    }
  };

  handlePassword = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    if (
      e.target.value.length < 8 ||
      !/[a-zа-яё]/i.test(e.target.value) ||
      !/[0-9]/.test(e.target.value)
    ) {
      this.state.errors.password = "Некорректный пароль";
    } else {
      this.state.errors.password = "";
    }
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="form">
        {this.state.errors.name && (
          <div className="error">Некорректное имя!</div>
        )}
        <label>
          Введите имя
          <input
            name="name"
            placeholder="name"
            value={name}
            onChange={(this.handleChange, this.handleName)}
          />
        </label>
        {this.state.errors.email && (
          <div className="error">Некорректный email!</div>
        )}
        <label>
          Введите email
          <input
            name="email"
            placeholder="email"
            value={email}
            onChange={(this.handleChange, this.handleEmail)}
          />
        </label>
        {this.state.errors.password && (
          <div className="error">Некорректный пароль!</div>
        )}
        <label>
          Введите пароль
          <input
            name="password"
            placeholder="password"
            value={password}
            onChange={(this.handleChange, this.handlePassword)}
          />
        </label>

        <button>Отправить</button>
      </form>
    )
  }
}

export default Form;
