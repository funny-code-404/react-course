import React from "react";
import styled from "styled-components";

import TableBody from "./TableBody";

class Table extends React.Component {
  render() {
    if (this.props.data.length < 1) {
      return null;
    }
    return (
      <TableContainer>
        <thead>
          <tr>
            {this.props.headerTitles.map(({ text, id }) => (
              <HeaderTitle key={id}>{text}</HeaderTitle>
            ))}
          </tr>
        </thead>
        <tbody>
          <TableBody
            handleChange={this.props.handleChange}
            names={this.props.names}
            data={this.props.data}
          ></TableBody>
        </tbody>
      </TableContainer>
    );
  }
}

const TableContainer = styled.table`
  margin: 50px auto;
  width: 80%;
  border-collapse: collapse;
  font-size: 16px;
`;

const HeaderTitle = styled.th`
  border: 2px solid #000;
`;

export default Table;
