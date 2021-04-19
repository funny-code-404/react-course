import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    errors: {
      name: null,
      email: null,
      password: null,
    },
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    if (
      (name === "name" && value.length > 3 && value.length < 30) ||
      (name === "email" && value.match(/.+@.+\..+/i)) ||
      (name === "password" &&
        value.length > 8 &&
        value.match(/[A-Z]/g) &&
        value.match(/[0-9]/g))
    ) {
      this.setState((prevState) => ({
        ...prevState,
        [name]: value,
        errors: {
          [name]: null,
        },
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        [name]: value,
        errors: {
          [name]: true,
        },
      }));
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
          onChange={this.handleChange}
        ></input>
        <input
          value={email}
          className={errors.email ? "error" : ""}
          name="email"
          onChange={this.handleChange}
        ></input>
        <input
          value={password}
          className={errors.password ? "error" : ""}
          name="password"
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleClick}>Send</button>
      </form>
    );
  }
}
export default Form;
