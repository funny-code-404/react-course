import React from "react";
import styled from "styled-components";
const TableField = styled.table`
  border: black solid 2px;
  border-collapse: collapse;
  width: 700px;
`;
const TableHeader = styled.thead`
  border: black solid 3px;
  background-color: #ffc919;
  color: black;
  font-size: 25px;
  font-weight: normal;
  height: 35px;
`;
const Th = styled.th`
  border: black solid 2px;
  width: 160px;
`;
const Td = styled.td`
  height: 30px;
  border: black solid 2px;
  color: black;
  font-size: 20px;
  padding-left: 5px;
  background-color: #e3e2e1;
`;
const FirstTh = styled.th`
  width: 30px;
`;
const FirstTd = styled.th`
  height: 30px;
  text-align: center;
  font-size: 20px;
  border: black solid 2px;
`;
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
      <TableField>
        <TableHeader>
          <tr>
            <FirstTh>№</FirstTh>
            <Th>Brand</Th>
            <Th>Model</Th>
            <Th>Issue Year</Th>
            <Th>Price</Th>
          </tr>
        </TableHeader>
        <tbody>
          {carStorage.map((item, i) => (
            <tr key={i} id={i} onClick={this.handleClick}>
              <FirstTd>{i + 1}</FirstTd>
              <Td>{item.brand}</Td>
              <Td>{item.model}</Td>
              <FirstTd>{item.issueYear}</FirstTd>
              <FirstTd>{item.price}</FirstTd>
            </tr>
          ))}
        </tbody>
      </TableField>
    );
  }
}
export default Table;
