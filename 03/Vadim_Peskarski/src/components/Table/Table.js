import React from 'react';
import './Table.css';

export class Table extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>N</th><th>Марка</th><th>Модель</th><th>Год выпуска</th><th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index+1}>
                <td>{index+1}</td><td>{item.mark}</td><td>{item.model}</td>
                <td>{item.year}</td><td>{item.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default Table;
