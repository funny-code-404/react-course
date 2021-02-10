import React, { Component } from "react";

export class MainFormData extends Component {
  render() {
    return (
      <fieldset className="body-main__fieldset">
        <label>
          <input
            name="name"
            placeholder="enter auto name"
            onChange={this.props.onChange}
          />
          Auto Name
        </label>

        <label>
          <input
            name="year"
            type="number"
            placeholder="enter auto year"
            onChange={this.props.onChange}
          />
          Auto year
        </label>
      </fieldset>
    );
  }
}
