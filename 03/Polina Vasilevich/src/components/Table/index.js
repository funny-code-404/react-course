import React from "react";
import PropTypes from "prop-types";
import TableItem from "./TableItem";

import { Table, TableLine, TableLineItem } from "./styles";

const TableComponent = ({ headers, children }) => (
  <Table>
    <thead>
      <TableLine>
        {headers.map(({ id, title }) => (
          <TableLineItem key={id}>{title}</TableLineItem>
        ))}
      </TableLine>
    </thead>
    {children}
  </Table>
);

TableComponent.Item = TableItem;

TableComponent.propTypes = {
  headers: PropTypes.array,
  children: PropTypes.array,
};

TableComponent.defaultProps = {
  headers: [],
  children: [],
};

export default TableComponent;
