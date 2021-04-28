import React from "react";
import PropTypes from "prop-types";
import { TableBody, TableLine, TableLineItem } from "./styles";

class TableItem extends React.Component {
  handleCLick = (e) => {
    const dataForm = this.props.dataTable[e.currentTarget.id];

    this.props.onClick(dataForm);
  };

  render() {
    const { id, dataLine } = this.props;
    return (
      <TableBody>
        <TableLine onClick={this.handleCLick} id={id}>
          <TableLineItem>{id + 1}</TableLineItem>
          {Object.entries(dataLine).map(([name, value]) => (
            <TableLineItem TableLineItem key={name} name={name} value={value}>
              {value}
            </TableLineItem>
          ))}
        </TableLine>
      </TableBody>
    );
  }
}

TableItem.propTypes = {
  id: PropTypes.number,
  dataTable: PropTypes.array,
  dataLine: PropTypes.object,
  onClick: PropTypes.func,
};

TableItem.defaultProps = {
  id: 0,
  dataTable: [],
  dataLine: {},
  onClick: "",
};

export default TableItem;
