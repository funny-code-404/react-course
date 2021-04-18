import React from "react";
import { Line, LineItem, Tr } from "./styles";
export default function TableItem({ dataLine, handleClickLine, id }) {
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
