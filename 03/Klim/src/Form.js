import React, { Component } from "react";

import "./Form.scss";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        name: "",
        password: "",
        email: "",
        city: "City",
        comment: "",
      },

      checkboxes: {
        Trial: false,
        Subscribe: false,
        Terms: false,
      },

      //   errors: {
      //     name: "",
      //     password: "",
      //     email: "",
      //   },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState(
      (prevState) => ({
        ...prevState,
        values: {
          ...prevState.values,
          [name]: value,
        },
      })
      //   () => {
      //     if (this.state.values[name].lenght > "12") {
      //       this.setState((prevState) => ({
      //         ...prevState,
      //         errors: {
      //           ...prevState.errors,
      //           [name]: `Warning ${name} is longer than necessary`,
      //         },
      //       }));

      //       event.target.textContent = `Warning ${name} is longer than necessary`;
      //     }
      //   }
    );
  };

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      checkboxes: {
        ...prevState.checkboxes,
        [name]: checked,
      },
    }));
  };

  handleClick = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  };

  render() {
    const {
      values: { name, email, password, city, comment },
      checkboxes: { Trial, Subscribe, Terms },
      //   errors: { name: errorName, password: errorPass, email: errorEmail },
    } = this.state;

    return (
      <form id="form" className="app__form">
        <fieldset className="form-first">
          <legend>Please, fill the main form!</legend>
          <div className="form-info">
            <input
              name="name"
              value={name}
              placeholder="name"
              onChange={this.handleChange}
            ></input>
            <input
              name="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={this.handleChange}
            ></input>
            <input
              name="email"
              value={email}
              placeholder="email"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form_select">
            <select name="city" value={city} onChange={this.handleChange}>
              <option disabled value="City">
                City
              </option>
              <option value="NewYork">NewYork</option>
              <option value="Ottawa">Ottawa</option>
              <option value="Oslo">Oslo</option>
            </select>
          </div>
        </fieldset>

        <fieldset className="form-second">
          <legend>Please, fill an add form!</legend>
          <div className="form-add-info">
            <label>
              <input
                type="checkbox"
                name="Trial"
                checked={Trial}
                onChange={this.handleCheckboxChange}
              ></input>
              Trial
            </label>
            <label>
              <input
                type="checkbox"
                name="Subscribe"
                checked={Subscribe}
                onChange={this.handleCheckboxChange}
              ></input>
              Subscribe
            </label>
            <label>
              <input
                type="checkbox"
                name="Terms"
                checked={Terms}
                onChange={this.handleCheckboxChange}
              ></input>
              Terms and conditions
            </label>
          </div>

          <textarea
            name="comment"
            value={comment}
            placeholder="You can type your comment here"
            onChange={this.handleChange}
          ></textarea>
        </fieldset>

        <div className="form-btns">
          <button onClick={this.handleClick}>Send</button>
          <button type="">Reset</button>
        </div>
      </form>
    );
  }
}
