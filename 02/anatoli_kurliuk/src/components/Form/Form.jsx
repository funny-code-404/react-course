import React from "react";
import { header, MAIL, NAME, PASSWORD } from "./config";
import "./style.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      [NAME]: "",
      [MAIL]: "",
      [PASSWORD]: "",
    };
  }

  handleClick = (event) => {
    event.preventDefault();

    const { ...inputs } = this.state;

    console.log({
      [NAME]: inputs[NAME],
      [MAIL]: inputs[MAIL],
      [PASSWORD]: inputs[PASSWORD],
    });
  };

  handleChange = (event) => {
    const key = event.target.name;
    const inputValue = event.target.value;

    this.setState({
      [key]: inputValue,
    });
  };

  render() {
    const { ...values } = this.state;
    return <form>
      <h1>{header}</h1>
      <label>
        <input
          name={NAME}
          placeholder="Name"
          value={values[NAME]}
          onChange={this.handleChange}
        />
      </label>

      <label>
        <input
          name={MAIL}
          placeholder="E-Mail"
          value={values[MAIL]}
          onChange={this.handleChange}
        />
      </label>

      <label>
        <input
          type="password"
          name={PASSWORD}
          placeholder="Password"
          value={values[PASSWORD]}
          onChange={this.handleChange}
        />
      </label>

      <button onClick={this.handleClick}>Ok</button>
    </form>;
  }
}

export default Form;
