import React from "react";

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Марка</td>
              <td>Модель</td>
              <td>Год выпуска</td>
              <td>Цена</td>
            </tr>
            {items.map((item, i ) => {
              return (
                <tr key={i}>
                  <td key={item.brand}>{item.brand}</td>
                  <td key={item.model}>{item.model}</td>
                  <td key={item.year}>{item.year}</td>
                  <td key={item.price}>{item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
