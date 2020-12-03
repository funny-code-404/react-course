import React, { Component } from "react";
import { MainFormData } from "../MainFormData";
import { ExtraFormData } from "../ExtraFormData";
import { Spreedshet } from "../Spreedshet";

import "./Form.scss";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainData: {
        name: "",
        year: "",
      },
      extraData: {
        country: "",
        used: "",
        defect: "",
      },
      carsList: {
        // dataList: [],
        mainDataList: [],
        extraDataList: [],
        counter: 0,
        id: [],
      },
    };
  }

  handleChangeMainData = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      mainData: {
        ...prevState.mainData,
        [name]: value,
      },
    }));
  };

  handleChangeExtraData = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      extraData: {
        ...prevState.extraData,
        [name]: value,
      },
    }));
  };

  handleChangeExtraDataCheckboxes = (event) => {
    const { name, checked } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      extraData: {
        ...prevState.extraData,
        [name]: checked,
      },
    }));
  };

  handleClick = (event) => {
    event.preventDefault();
    const {
      mainDataList,
      extraDataList,
      counter,
      id,
      // dataList,
    } = this.state.carsList;
    this.setState(
      (prevState) => ({
        ...prevState,
        carsList: {
          ...prevState.carsList,
          counter: counter + 1,
          id: id.concat([counter]),
          mainDataList: mainDataList.concat(this.state.mainData),
          extraDataList: extraDataList.concat(this.state.extraData),
          // dataList: dataList.concat(this.state.mainData, this.state.extraData),
        },
      }),
      () => {
        console.log(this.state);
      }
    );
  };

  componentDidUpdate() {}

  render() {
    const { carsList } = this.state;
    return (
      <div className="container">
        <form>
          <fieldset className="body__fieldset">
            <legend>Car registration field</legend>
            <MainFormData onChange={this.handleChangeMainData} />
            <ExtraFormData
              onChange={this.handleChangeExtraData}
              onChangeCheckboxes={this.handleChangeExtraDataCheckboxes}
            />

            <button className="add__btn" onClick={this.handleClick}>
              Add
            </button>
            <button className="add__btn" type="reset">
              Reset
            </button>
          </fieldset>

          <fieldset>
            <Spreedshet carsList={carsList} />
          </fieldset>
        </form>
      </div>
    );
  }
}
