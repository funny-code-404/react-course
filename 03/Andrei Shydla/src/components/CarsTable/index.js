import React from "react";
import "./style.css";

class CarsTable extends React.Component {
  handleOnClick = async (event) => {
    console.log(`onClicked element id: ${event.target.parentNode.id}`);
    const { passOnClickedIdToCars } = this.props.functions;
    await passOnClickedIdToCars(event.target.parentNode.id);
  };

  render() {
    const dataBase = this.props.data.base[0];
    const renderCondition = Object.keys(dataBase).length === 0;
    let renderItemsTable = [];

    if (!renderCondition) {
      const arrayDataBaseTable = Object.entries(dataBase).map(
        ([itemId, itemData]) => {
          return {
            id: itemId,
            number: itemData.number,
            brand: itemData.brand,
            model: itemData.model,
            year: itemData.year,
            price: itemData.price,
          };
        }
      );
      // console.log(arrayDataBaseTable);

      const {
        lastEnteredItemId,
        lastEnteredItemNumber,
        lastEnteredItemBrand,
        lastEnteredItemModel,
        lastEnteredItemYear,
        lastEnteredItemPrice,
      } = this.props.data;
      console.log(`last entered car - 
    number: ${lastEnteredItemNumber},
    id: ${lastEnteredItemId}, 
    brand: ${lastEnteredItemBrand}, 
    model: ${lastEnteredItemModel},
    year: ${lastEnteredItemYear},
    price: ${lastEnteredItemPrice}.`);

      renderItemsTable = arrayDataBaseTable.map((item) => (
        <tr key={`00${item.id}`} id={item.id} className="dataBaseItemCars">
          <td className="cars-table-listNumber">{item.number}</td>
          <td>{item.brand}</td>
          <td>{item.model}</td>
          <td>{item.year}</td>
          <td>{item.price}</td>
        </tr>
      ));
    }

    return (
      <div>
        <table className="cars-table">
          <thead>
            <tr id="111">
              <th className="cars-table-listNumber">N</th>
              <th>Car brand</th>
              <th>Model</th>
              <th>Year of production</th>
              <th>Price, $</th>
            </tr>
          </thead>
          <tbody onClick={this.handleOnClick}>
            {!renderCondition && <>{renderItemsTable}</>}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CarsTable;
