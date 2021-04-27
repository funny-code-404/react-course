import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  width: 600px;
  border: 1px solid black;
  th,
  td {
    border: 1px solid black;
  }
`

class Table extends React.Component {
  handleClick = (e) => {
    const { id } = e.currentTarget
    this.props.getTableRow(id)
  }

  render() {
    const { cars } = this.props.data
    return (
      <StyledTable>
        <thead>
          <tr>
            <th>№</th>
            <th>Марка</th>
            <th>Модель</th>
            <th>Год выпуска</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, i) => (
            <tr key={i} id={i} onClick={this.handleClick}>
              <td>{i + 1}</td>
              <td>{car.car}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.cost}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    )
  }
}

export default Table
