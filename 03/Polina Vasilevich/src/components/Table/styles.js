import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  min-width: 500px;
  border-collapse: collapse;
  border-spacing: 0;

  margin: 25px 0;
  font-size: 1.2em;
  font-family: sans-serif;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

export const TableLine = styled.tr`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
`;

export const TableLineItem = styled.th`
  padding: 12px 15px;
  text-align: center;
`;
