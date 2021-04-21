import React from "react";
import CarsForm from "../CarsForm";
import CarsTable from "../CarsTable";

class Cars extends React.Component {
  state = {
    base: [{}],

    lastEnteredItemId: "",
    lastEnteredItemNumber: "",
    lastEnteredItemBrand: "",
    lastEnteredItemModel: "",
    lastEnteredItemYear: "",
    lastEnteredItemPrice: "",

    defaultIsClickedCar: false,
    defaultItem: "",
    defaultState: "0",

    isClickedCarStateBrand: false,
    isClickedCarStateModel: false,
    isClickedCarStateYear: false,
    isClickedCarStatePrice: false,

    clickedItemId: "",
    clickedItemNumber: "",
    clickedItemBrand: "",
    clickedItemModel: "",
    clickedItemYear: "",
    clickedItemPrice: "",

    isRightClickedItemBrand: "0",
    isRightClickedItemModel: "0",
    isRightClickedItemYear: "0",
    isRightClickedItemPrice: "0",
  };

  setDefaultIsClickedCarToCars = async (name) => {
    const keyState = `isClickedCarState${
      name[0].toUpperCase() + name.slice(1)
    }`;

    // console.log(`${[keyState]}: ${this.state[keyState]}`);
    await this.setState((prevState) => ({
      ...prevState,

      [keyState]: false,
    }));
    // console.log(`${[keyState]}: ${this.state[keyState]}`);
  };

  passOnClickedIdToCars = (itemId) => {
    this.setClickedItem(itemId);
  };

  setClickedItem = async (itemId) => {
    const dataBase = this.state.base[0];
    const itemData = dataBase[itemId];
    return await this.setState((prevState) => ({
      ...prevState,

      isClickedCarStateBrand: true,
      isClickedCarStateModel: true,
      isClickedCarStateYear: true,
      isClickedCarStatePrice: true,

      clickedItemId: itemId,
      clickedItemNumber: itemData.number,
      clickedItemBrand: itemData.brand,
      clickedItemModel: itemData.model,
      clickedItemYear: itemData.year,
      clickedItemPrice: itemData.price,

      isRightClickedItemBrand: true,
      isRightClickedItemModel: true,
      isRightClickedItemYear: true,
      isRightClickedItemPrice: true,
    }));
  };

  passDataToCars = async (item) => {
    await this.addItemToDataBase(item);
  };

  addItemToDataBase = async (item) => {
    const newDataBase = this.state.base[0];
    const sumNumber = Object.keys(newDataBase).length;
    const newNumber = sumNumber + 1;

    const itemId = Object.keys(item)[0];
    const itemData = item[itemId];
    itemData.number = newNumber;
    newDataBase[itemId] = itemData;

    const newBase = [];
    newBase[0] = newDataBase;

    const { brand, model, year, price } = itemData;

    await this.setState((prevState) => ({
      ...prevState,

      base: newBase,
      lastEnteredItemId: itemId,
      lastEnteredItemNumber: newNumber,
      lastEnteredItemBrand: brand,
      lastEnteredItemModel: model,
      lastEnteredItemYear: year,
      lastEnteredItemPrice: price,
    }));
  };

  render() {
    const {
      isClickedCarStateBrand,
      isClickedCarStateModel,
      isClickedCarStateYear,
      isClickedCarStatePrice,

      clickedItemId,
      clickedItemNumber,
      clickedItemBrand,
      clickedItemModel,
      clickedItemYear,
      clickedItemPrice,

      isRightClickedItemBrand,
      isRightClickedItemModel,
      isRightClickedItemYear,
      isRightClickedItemPrice,
    } = this.state;

    const {
      base,
      lastEnteredItemId,
      lastEnteredItemNumber,
      lastEnteredItemBrand,
      lastEnteredItemModel,
      lastEnteredItemYear,
      lastEnteredItemPrice,
    } = this.state;
    return (
      <div>
        <CarsTable
          functions={{ passOnClickedIdToCars: this.passOnClickedIdToCars }}
          data={{
            base: base,
            lastEnteredItemId: lastEnteredItemId,
            lastEnteredItemNumber: lastEnteredItemNumber,
            lastEnteredItemBrand: lastEnteredItemBrand,
            lastEnteredItemModel: lastEnteredItemModel,
            lastEnteredItemYear: lastEnteredItemYear,
            lastEnteredItemPrice: lastEnteredItemPrice,
          }}
        />
        <CarsForm
          data={{
            isClickedCarStateBrand: isClickedCarStateBrand,
            isClickedCarStateModel: isClickedCarStateModel,
            isClickedCarStateYear: isClickedCarStateYear,
            isClickedCarStatePrice: isClickedCarStatePrice,

            clickedItemId: clickedItemId,
            clickedItemNumber: clickedItemNumber,
            clickedItemBrand: clickedItemBrand,
            clickedItemModel: clickedItemModel,
            clickedItemYear: clickedItemYear,
            clickedItemPrice: clickedItemPrice,
            isRightClickedItemBrand: isRightClickedItemBrand,
            isRightClickedItemModel: isRightClickedItemModel,
            isRightClickedItemYear: isRightClickedItemYear,
            isRightClickedItemPrice: isRightClickedItemPrice,
          }}
          functions={{
            passDataToCars: this.passDataToCars,
            setDefaultIsClickedCarToCars: this.setDefaultIsClickedCarToCars,
          }}
        />
        />
      </div>
    );
  }
}

export default Cars;
