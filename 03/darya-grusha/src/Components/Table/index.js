import React from "react";
class Table extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    const { carStorage, handleTableClick } = this.props;
    handleTableClick(carStorage[id]);
  };
  render() {
    const { carStorage } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <td>№</td>
            <td>Марка</td>
            <td>Модель</td>
            <td>Год выпуска</td>
            <td>Цена</td>
          </tr>
        </thead>
        <tbody>
          {carStorage.map((item, i) => (
            <tr key={i} id={i} onClick={this.handleClick}>
              <td>{i + 1}</td>
              <td>{item.brand}</td>
              <td>{item.model}</td>
              <td>{item.issueYear}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default Table;
