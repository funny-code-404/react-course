import styled from "styled-components";

export const TableBody = styled.tbody`
  border-top: 1px solid #e6e6e6;
`;

export const TableLine = styled.tr`
  &:hover {
    color: #009879;

    cursor: pointer;

    background-color: #f3f3f3;
  }
`;

export const TableLineItem = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #dddddd;
`;
