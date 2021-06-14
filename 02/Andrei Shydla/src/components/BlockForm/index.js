import React from "react";
import BlockInput from "../BlockInput";
import {
  checkValueConditionsName,
  checkValueConditionsEmail,
  checkValueConditionsPassword,
} from "./controller";

import "./style.css";

const listData = {
  dataName: {
    label: {
      headLabel: "Name",
      classNameLabelList: "regForm-label",
    },

    input: {
      id: "regForm-input-name",
      placeholder: "enter your name",
      classNameInputListDefault: "regForm-input",
      classNameInputListFalsy: "border-red",
    },

    mark: {
      classNameVerMarkListDefault: "regForm-verification-mark",
      classNameVerMarkListTrue: "regForm-verification-mark mark-true",
    },
  },

  dataEmail: {
    label: {
      headLabel: "E-mail",
      classNameLabelList: "regForm-label",
    },

    input: {
      id: "regForm-input-email",
      placeholder: "enter your E-mail address",
      classNameInputListDefault: "regForm-input",
      classNameInputListFalsy: "border-red",
    },

    mark: {
      classNameVerMarkListDefault: "regForm-verification-mark",
      classNameVerMarkListTrue: "regForm-verification-mark mark-true",
    },
  },

  dataPassword: {
    label: {
      headLabel: "Password",
      classNameLabelList: "regForm-label",
    },

    input: {
      id: "regForm-input-password",
      placeholder: "enter your password",
      classNameInputListDefault: "regForm-input",
      classNameInputListFalsy: "border-red",
    },

    mark: {
      classNameVerMarkListDefault: "regForm-verification-mark",
      classNameVerMarkListTrue: "regForm-verification-mark mark-true",
    },
  },
};

class BlockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueName: "",
      valueEmail: "",
      valuePassword: "",
      isRightName: "0",
      isRightEmail: "0",
      isRightPassword: "0",

      lastValueName: "",
      lastValueEmail: "",
      lastValuePassword: "",
      lastIsRightName: "",
      lastIsRightEmail: "",
      lastIsRightPassword: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async () => {
    const {
      lastIsRightName,
      lastIsRightEmail,
      lastIsRightPassword,
    } = this.state;
    if (lastIsRightName && lastIsRightEmail && lastIsRightPassword) {
      const { lastValueName, lastValueEmail, lastValuePassword } = this.state;
      console.log(
        `Name: ${lastValueName}, E-mail: ${lastValueEmail}, Password: ${lastValuePassword}.`
      );
      await this.setResultToLocalStorage(lastValueName, {
        "E-mail": lastValueEmail,
        Password: lastValuePassword,
      });
    } else {
      alert(`expected correct data`);
    }
  };

  returnNameValueState = (value, state) => {
    this.setState((prevState) => ({
      ...prevState,

      lastValueName: value,
      lastIsRightName: state,
    }));
    // console.log(`Name - val: ${value}, state: ${state}`);
  };

  returnEmailValueState = (value, state) => {
    this.setState((prevState) => ({
      ...prevState,

      lastValueEmail: value,
      lastIsRightEmail: state,
    }));
    // console.log(`Email - val: ${value}, state: ${state}`);
  };

  returnPasswordValueState = (value, state) => {
    this.setState((prevState) => ({
      ...prevState,

      lastValuePassword: value,
      lastIsRightPassword: state,
    }));
    // console.log(`Password - val: ${value}, state: ${state}`);
  };

  async setResultToLocalStorage(name, data) {
    return await localStorage.setItem(name, JSON.stringify(data));
  }

  render() {
    return (
      <div className="regForm-main">
        <h3 className="regForm-h3">Registration form</h3>

        <form>
          {/* Name */}
          <BlockInput
            data={{
              renderProp: listData.dataName,
              value: this.state.valueName,
              state: this.state.isRightName,
            }}
            functions={{
              checkValueConditions: checkValueConditionsName,
              returnValueState: this.returnNameValueState,
            }}
          />

          {/* Email */}
          <BlockInput
            data={{
              renderProp: listData.dataEmail,
              value: this.state.valueEmail,
              state: this.state.isRightEmail,
            }}
            functions={{
              checkValueConditions: checkValueConditionsEmail,
              returnValueState: this.returnEmailValueState,
            }}
          />
          {/* Password */}
          <BlockInput
            data={{
              renderProp: listData.dataPassword,
              value: this.state.valuePassword,
              state: this.state.isRightPassword,
            }}
            functions={{
              checkValueConditions: checkValueConditionsPassword,
              returnValueState: this.returnPasswordValueState,
            }}
          />

          <button className="submit-position" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default BlockForm;
