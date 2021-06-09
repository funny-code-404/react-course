import React from "react";
import BlockInputCars from "../BlockInputCars";

const listData = {
  dataBrand: {
    input: {
      id: "regForm-input-brand",
      name: "brand",
      placeholder: "enter car brand",
      classNameInputListDefault: "regForm-input",
      classNameInputListFalsy: "error",
    },
  },

  dataModel: {
    input: {
      id: "regForm-input-model",
      name: "model",
      placeholder: "enter car model",
      classNameInputListDefault: "regForm-input",
      classNameInputListFalsy: "error",
    },
  },
  dataYear: {
    input: {
      id: "regForm-input-year",
      name: "year",
      placeholder: "enter year of car production",
      classNameInputListDefault: "regForm-input",
      classNameInputListFalsy: "error",
    },
  },

  dataPrice: {
    input: {
      id: "regForm-input-price",
      name: "price",
      placeholder: "enter car price",
      classNameInputListDefault: "regForm-input",
      classNameInputListFalsy: "error",
    },
  },
};

class CarsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      valueBrandDefault: "",
      valueModelDefault: "",
      valueYearDefault: "",
      valuePriceDefault: "",
      isRightBrandDefault: "0",
      isRightModelDefault: "0",
      isRightYearDefault: "0",
      isRightPriceDefault: "0",

      lastValueBrand: "",
      lastValueModel: "",
      lastValueYear: "",
      lastValuePrice: "",
      lastIsRightBrand: "0",
      lastIsRightModel: "0",
      lastIsRightYear: "0",
      lastIsRightPrice: "0",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  setDefaultData = () => {
    const {
      valueBrandDefault,
      valueModelDefault,
      valueYearDefault,
      valuePriceDefault,
      isRightBrandDefault,
      isRightModelDefault,
      isRightYearDefault,
      isRightPriceDefault,
    } = this.state;
    this.setState((prevState) => ({
      ...prevState,

      lastValueBrand: valueBrandDefault,
      lastValueModel: valueModelDefault,
      lastValueYear: valueYearDefault,
      lastValuePrice: valuePriceDefault,
      lastIsRightBrand: isRightBrandDefault,
      lastIsRightModel: isRightModelDefault,
      lastIsRightYear: isRightYearDefault,
      lastIsRightPrice: isRightPriceDefault,
    }));
  };

  handleClick = (event) => {
    event.preventDefault();
    const {
      lastIsRightBrand,
      lastIsRightModel,
      lastIsRightYear,
      lastIsRightPrice,
    } = this.state;

    if (
      lastIsRightBrand &&
      lastIsRightModel &&
      lastIsRightYear &&
      lastIsRightPrice
    ) {
      const {
        lastValueBrand,
        lastValueModel,
        lastValueYear,
        lastValuePrice,
      } = this.state;
      const item = this.createCar(
        lastValueBrand,
        lastValueModel,
        lastValueYear,
        lastValuePrice
      );

      const { passDataToCars } = this.props.functions;
      passDataToCars(item);
      this.setDefaultData();
    } else {
      alert(`expected correct data`);
    }
  };

  createCar = (brand, model, year, price) => {
    const id = `car${Date.now()}`;

    return {
      [id]: {
        brand: brand,
        model: model,
        year: year,
        price: price,
      },
    };
  };

  checkValueConditionsBrand = (value) => {
    return value[0] !== " " &&
      value[0] !== "0" &&
      Number.isNaN(Number(value[0])) &&
      Boolean(value) &&
      value.length >= 3 &&
      value.length <= 30
      ? true
      : false;
  };

  checkValueConditionsModel = (value) => {
    return value[0] !== " " &&
      // value[0] !== "0" &&
      Boolean(value) &&
      // value.length >= 7 &&
      value.length <= 30
      ? // value.indexOf("@") > -1 &&
        // value.indexOf(".") > -1
        true
      : false;
  };

  checkValueConditionsYear = (value) => {
    return value[0] !== " " &&
      value[0] !== "0" &&
      Boolean(value) &&
      value.length === 4 &&
      // value.length <= 30 &&
      // value.split("").some(function (i) {
      //   return Number(!isNaN(Number(i)));
      // }) &&
      value.split("").some(function (i) {
        return !Number(isNaN(Number(i)));
      })
      ? true
      : false;
  };

  checkValueConditionsPrice = (value) => {
    return value[0] !== " " &&
      value[0] !== "0" &&
      Boolean(value) &&
      value.length >= 4 &&
      value.length <= 30 &&
      // value.split("").some(function (i) {
      //   return Number(!isNaN(Number(i)));
      // }) &&
      value.split("").some(function (i) {
        return !Number(isNaN(Number(i)));
      })
      ? true
      : false;
  };

  setDataToForm = (name, value, state) => {
    const { setDefaultIsClickedCarToCars } = this.props.functions;
    setDefaultIsClickedCarToCars(name);
    const keyValue = `lastValue${name[0].toUpperCase() + name.slice(1)}`;
    const keyState = `lastIsRight${name[0].toUpperCase() + name.slice(1)}`;

    this.setState((prevState) => ({
      ...prevState,

      [keyValue]: value,
      [keyState]: state,
    }));
  };

  render() {
    let currentValueBrand = "";
    let currentValueModel = "";
    let currentValueYear = "";
    let currentValuePrice = "";

    let currentStateBrand = "";
    let currentStateModel = "";
    let currentStateYear = "";
    let currentStatePrice = "";

    const {
      isClickedCarStateBrand,
      isClickedCarStateModel,
      isClickedCarStateYear,
      isClickedCarStatePrice,
    } = this.props.data;

    if (isClickedCarStateBrand) {
      currentValueBrand = this.props.data.clickedItemBrand;
      currentStateBrand = this.props.data.isRightClickedItemBrand;
    } else {
      currentValueBrand = this.state.lastValueBrand;
      currentStateBrand = this.state.lastIsRightBrand;
    }

    if (isClickedCarStateModel) {
      currentValueModel = this.props.data.clickedItemModel;
      currentStateModel = this.props.data.isRightClickedItemModel;
    } else {
      currentValueModel = this.state.lastValueModel;
      currentStateModel = this.state.lastIsRightModel;
    }

    if (isClickedCarStateYear) {
      currentValueYear = this.props.data.clickedItemYear;
      currentStateYear = this.props.data.isRightClickedItemYear;
    } else {
      currentValueYear = this.state.lastValueYear;
      currentStateYear = this.state.lastIsRightYear;
    }

    if (isClickedCarStatePrice) {
      currentValuePrice = this.props.data.clickedItemPrice;
      currentStatePrice = this.props.data.isRightClickedItemPrice;
    } else {
      currentValuePrice = this.state.lastValuePrice;
      currentStatePrice = this.state.lastIsRightPrice;
    }

    return (
      <div className="regForm-main">
        <h3 className="regForm-h3">Car data</h3>

        <form>
          {/* Car brand */}
          <BlockInputCars
            data={{
              renderProp: listData.dataBrand,
              value: currentValueBrand,
              state: currentStateBrand,
            }}
            functions={{
              checkValueConditions: this.checkValueConditionsBrand,
              setDataToForm: this.setDataToForm,
            }}
          />

          {/* Car model */}
          <BlockInputCars
            data={{
              renderProp: listData.dataModel,
              value: currentValueModel,
              state: currentStateModel,
            }}
            functions={{
              checkValueConditions: this.checkValueConditionsModel,
              setDataToForm: this.setDataToForm,
            }}
          />
          {/* Year of car production */}
          <BlockInputCars
            data={{
              renderProp: listData.dataYear,
              value: currentValueYear,
              state: currentStateYear,
            }}
            functions={{
              checkValueConditions: this.checkValueConditionsYear,
              setDataToForm: this.setDataToForm,
            }}
          />
          {/* Price */}
          <BlockInputCars
            data={{
              renderProp: listData.dataPrice,
              value: currentValuePrice,
              state: currentStatePrice,
            }}
            functions={{
              checkValueConditions: this.checkValueConditionsPrice,
              setDataToForm: this.setDataToForm,
            }}
          />

          <button className="submit-position" onClick={this.handleClick}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default CarsForm;
