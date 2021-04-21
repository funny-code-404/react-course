import React from "react";
import BlockInput from "../BlockInput";
import "./style.css";

const listData = {
  dataName: {
    label: {
      headLabel: "Name",
      classNameLabelList: "regForm-label",
    },

    input: {
      id: "regForm-input-name",
      name: "name",
      placeholder: "enter your name",
      classNameInputListDefault: "regForm-input",
      classNameInputListFalsy: "error",
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
      name: "email",
      placeholder: "enter your E-mail address",
      classNameInputListDefault: "regForm-input",
      classNameInputListFalsy: "error",
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
      name: "password",
      placeholder: "enter your password",
      classNameInputListDefault: "regForm-input",
      classNameInputListFalsy: "error",
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
      valueNameDefault: "",
      valueEmailDefault: "",
      valuePasswordDefault: "",
      isRightNameDefault: "0",
      isRightEmailDefault: "0",
      isRightPasswordDefault: "0",

      lastValueName: "",
      lastValueEmail: "",
      lastValuePassword: "",
      lastIsRightName: "0",
      lastIsRightEmail: "0",
      lastIsRightPassword: "0",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  setDefaultData = async () => {
    const {
      valueNameDefault,
      valueEmailDefault,
      valuePasswordDefault,
      isRightNameDefault,
      isRightEmailDefault,
      isRightPasswordDefault,
    } = this.state;
    await this.setState((prevState) => ({
      ...prevState,

      lastValueName: valueNameDefault,
      lastValueEmail: valueEmailDefault,
      lastValuePassword: valuePasswordDefault,
      lastIsRightName: isRightNameDefault,
      lastIsRightEmail: isRightEmailDefault,
      lastIsRightPassword: isRightPasswordDefault,
    }));
  };

  handleClick = async (event) => {
    event.preventDefault();
    const {
      lastIsRightName,
      lastIsRightEmail,
      lastIsRightPassword,
    } = this.state;

    if (lastIsRightName && lastIsRightEmail && lastIsRightPassword) {
      const { lastValueName, lastValueEmail, lastValuePassword } = this.state;
      const user = this.createUser(
        lastValueName,
        lastValueEmail,
        lastValuePassword
      );

      const { passDataToApp1 } = this.props.functions;
      await passDataToApp1(user);
      await this.setDefaultData();
    } else {
      alert(`expected correct data`);
    }
  };

  createUser = (name, email, password) => {
    const id = `user${Date.now()}`;

    return {
      [id]: {
        name: name,
        email: email,
        password: password,
      },
    };
  };

  checkValueConditionsName = (value) => {
    return value[0] !== " " &&
      value[0] !== "0" &&
      Number.isNaN(Number(value[0])) &&
      Boolean(value) &&
      value.length >= 3 &&
      value.length <= 30
      ? true
      : false;
  };

  checkValueConditionsEmail = (value) => {
    return value[0] !== " " &&
      value[0] !== "0" &&
      Boolean(value) &&
      value.length >= 7 &&
      value.length <= 30 &&
      value.indexOf("@") > -1 &&
      value.indexOf(".") > -1
      ? true
      : false;
  };

  checkValueConditionsPassword = (value) => {
    return value[0] !== " " &&
      value[0] !== "0" &&
      Boolean(value) &&
      value.length >= 8 &&
      value.length <= 30 &&
      value.split("").some(function (i) {
        return Number(!isNaN(Number(i)));
      }) &&
      value.split("").some(function (i) {
        return Number(isNaN(Number(i)));
      })
      ? true
      : false;
  };

  setDataToForm = async (name, value, state) => {
    const keyValue = `lastValue${name[0].toUpperCase() + name.slice(1)}`;
    const keyState = `lastIsRight${name[0].toUpperCase() + name.slice(1)}`;

    await this.setState((prevState) => ({
      ...prevState,

      [keyValue]: value,
      [keyState]: state,
    }));
  };

  async setResultToLocalStorage(name, data) {
    return await localStorage.setItem(name, JSON.stringify(data));
  }

  render() {
    const {
      lastValueName,
      lastValueEmail,
      lastValuePassword,
      lastIsRightName,
      lastIsRightEmail,
      lastIsRightPassword,
    } = this.state;

    return (
      <div className="regForm-main">
        <h3 className="regForm-h3">Registration form</h3>

        <form>
          {/* Name */}
          <BlockInput
            data={{
              renderProp: listData.dataName,
              value: lastValueName,
              state: lastIsRightName,
            }}
            functions={{
              checkValueConditions: this.checkValueConditionsName,
              setDataToForm: this.setDataToForm,
            }}
          />

          {/* Email */}
          <BlockInput
            data={{
              renderProp: listData.dataEmail,
              value: lastValueEmail,
              state: lastIsRightEmail,
            }}
            functions={{
              checkValueConditions: this.checkValueConditionsEmail,
              setDataToForm: this.setDataToForm,
            }}
          />
          {/* Password */}
          <BlockInput
            data={{
              renderProp: listData.dataPassword,
              value: lastValuePassword,
              state: lastIsRightPassword,
            }}
            functions={{
              checkValueConditions: this.checkValueConditionsPassword,
              setDataToForm: this.setDataToForm,
            }}
          />

          <button className="submit-position" onClick={this.handleClick}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default BlockForm;
