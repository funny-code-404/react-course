import React, { Component } from "react";

export class ExtraFormData extends Component {
  render() {
    return (
      <fieldset className="body-extra__fieldset">
        <label>
          <select
            name="country"
            defaultValue="Select your country"
            onChange={this.props.onChange}
          >
            <option disabled value="Select your country">
              Select your country
            </option>
            <option value="China">China</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
          </select>
          Manufacturer country
        </label>

        <label>
          <input
            name="used"
            type="checkbox"
            onChange={this.props.onChangeCheckboxes}
          />
          Used
        </label>

        <label>
          <input
            name="defect"
            type="checkbox"
            onChange={this.props.onChangeCheckboxes}
          />
          Defect
        </label>
      </fieldset>
    );
  }
}
