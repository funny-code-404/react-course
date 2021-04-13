import React from 'react';
import styled from 'styled-components';

const RowEl = styled.div`
  width: 150px;
  border: 1px solid black;
`;

const TableRow = styled.div`
  width: 750px;
  background-color: lightgray;
  display: flex;
`;

class Table extends React.Component {

  render () {
    const { data } = this.props;

    return (
      <>
        <TableRow>
          <RowEl>№</RowEl>
          <RowEl>Марка</RowEl>
          <RowEl>Модель</RowEl>
          <RowEl>Год выпуска</RowEl>
          <RowEl>Стоимость</RowEl>
        </TableRow>

        {data.map((item, index) => {
          return (
            <TableRow key={index + 1}>
              <RowEl>{index + 1}</RowEl>
              <RowEl>{item.brand}</RowEl>
              <RowEl>{item.model}</RowEl>
              <RowEl>{item.year}</RowEl>
              <RowEl>{item.price}</RowEl>
            </TableRow>
            )
          })
        }
      </>
    )
  }
}

export default Table;