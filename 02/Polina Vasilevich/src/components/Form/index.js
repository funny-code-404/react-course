import React from "react";
import "./styles.scss";

class Form extends React.Component {
  state = {
    date: {},
    errors: {},
    isValid: true,
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      date: { ...prevState.date, [name]: value },
    }));
  };

  validate() {}

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.date);
  };

  render() {
    const { inputs } = this.props;
    return (
      <form className="form" onChange={this.handleChange}>
        <h2 className="form__title">ACCOUNT LOGIN</h2>
        {inputs.map(({ id, type, name, placeholder }) => (
          <input
            key={id}
            type={type}
            name={name}
            placeholder={placeholder}
            className="form__input"
          />
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
