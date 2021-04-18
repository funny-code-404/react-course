import React from "react";
import TableComponent from "..";
import { Line, LineItem, Tr } from "./styles";

class TableLine extends React.Component {
  render() {
    const { id, handleClickLine, dataLine } = this.props;
    return (
      <Line>
        <Tr onClick={handleClickLine} id={id}>
          <LineItem>{id + 1}</LineItem>
          {Object.entries(dataLine).map(([name, value]) => (
            <LineItem key={name} name={name} value={value}>
              {value}
            </LineItem>
          ))}
        </Tr>
      </Line>
    );
  }
}

export default TableLine;
