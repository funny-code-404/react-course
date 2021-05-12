import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 500px;
  border: 2px solid palevioletred;
  border-collapse: collapse;
  color: palevioletred;
  margin: 1em 0;

  th,
  td {
    border: 2px solid palevioletred;
  }
`;

class Table extends React.Component {
  handleClick = (e) => {
    const { data } = this.props;
    this.props.onRowClick(data[e.currentTarget.id]);
  };
  render() {
    const { data } = this.props;
    return (
      <StyledTable>
        <thead>
          <tr>
            <th>№</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i} id={i} onClick={this.handleClick}>
                <td>{i + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    );
  }
}

export default Table;
