import React from "react";
import TableLine from "./TableLine";

import { Table, Tr, Th } from "./styles";

const TableComponent = ({ headers, children }) => (
  <Table>
    <thead>
      <Tr>
        {headers.map(({ id, title }) => (
          <Th key={id}>{title}</Th>
        ))}
      </Tr>
    </thead>
    {children}
  </Table>
);

TableComponent.Item = TableLine;

export default TableComponent;
