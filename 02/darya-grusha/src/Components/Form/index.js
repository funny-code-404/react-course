import React from "react";
import "./styles.css";

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
      alert("Complete invalid fields");
    }
  };
  render() {
    const { name, email, password, errors } = this.state;
    return (
      <form>
        <input
          value={name}
          className={errors.name ? "error" : ""}
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
        ></input>
        {errors.name ? <p>Name is invalid</p> : ""}
        <input
          value={email}
          className={errors.email ? "error" : ""}
          name="email"
          placeholder="E-mail"
          onChange={this.handleChange}
        ></input>
        {errors.email ? <p>Email is invalid</p> : ""}
        <input
          value={password}
          className={errors.password ? "error" : ""}
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
        ></input>
        {errors.password ? <p>Password is invalid</p> : ""}
        <button onClick={this.handleClick}>Send</button>
      </form>
    );
  }
}
export default Form;
