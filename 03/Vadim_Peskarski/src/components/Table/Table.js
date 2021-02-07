import React from 'react';
import styled from 'styled-components';

const CarsTable = styled.table`
  border: 2px solid black;
  border-collapse: collapse;
  width: 700px;
  margin: 8px auto 32px 8px;
  & td, th {
    border: 1px solid black;
    text-align: center;
  }
`;


export class Table extends React.Component {

  handleClick = (e) => {
    const { data, onTableClick } = this.props;
    onTableClick(data[e.currentTarget.dataset.value]);
  }

  render() {
    const { data } = this.props;

    return (
      <CarsTable>
        <thead>
          <tr>
            <th>N</th><th>Марка</th><th>Модель</th><th>Год выпуска</th><th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index + 1} data-value={index} onClick={this.handleClick}>
                <td>{index + 1}</td><td>{item.mark}</td><td>{item.model}</td>
                <td>{item.year}</td><td>{item.price}</td>
              </tr>
            )
          })}
        </tbody>
      </CarsTable>
    )
  }
}

export default Table;
