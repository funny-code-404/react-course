import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Table extends React.Component {
  handleClick = (e) => {
    const { id } = e.currentTarget;
    this.props.onTableClick(id);
  };

  render() {
    const { cars } = this.props.data;

    return (
      <table className="w-75 table table-hover">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Марка</th>
            <th scope="col">Модель</th>
            <th scope="col">Объем</th>
            <th scope="col">Год выпуска</th>
            <th scope="col">Цена</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, i) => (
            <tr key={i} id={i} onClick={this.handleClick}>
              <th scope="row">{i + 1}</th>
              <td>{car.brand}</td>
              <td>{car.model}</td>
              <td>{car.volume}</td>
              <td>{car.year}</td>
              <td>{car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
