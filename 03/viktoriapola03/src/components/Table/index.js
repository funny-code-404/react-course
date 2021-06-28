import React from 'react';
import styled from 'styled-components';

const TableStyle = styled.table`
  display: flex;
  margin-left: 50px; 
`;

const DivStyle = styled.div`
  padding: 10px 15px;
  border: 1px solid black;
  width: 200px;
`;

class Table extends React.Component {

  clickTable = (e) => {
    const { clickTable } = this.props;
    clickTable(e);
  };

  render() {

    const { cars } = this.props;
    
    return(
      <>
      <TableStyle>
        <DivStyle>№</DivStyle>
        <DivStyle>Марка</DivStyle>
        <DivStyle>Модель</DivStyle>
        <DivStyle>Год выпуска</DivStyle>
        <DivStyle>Цена</DivStyle>
     </TableStyle>
      {cars.map((item, i) => (
    <>
        <TableStyle onClick={this.clickTable} className="table-style" >
          <DivStyle id={++i}>{i++}</DivStyle>
          <DivStyle>{item.car}</DivStyle>
          <DivStyle>{item.model}</DivStyle>
          <DivStyle>{item.year}</DivStyle>
          <DivStyle>{item.price}</DivStyle>
        </TableStyle>
        </>
      ))}
    </>
    );
  };
};


export default Table;
