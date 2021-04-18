import styled from "styled-components";

export const Line = styled.tbody`
  border-top: 1px solid #e6e6e6;
`;

export const LineItem = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #dddddd;
`;

export const Tr = styled.tr`
  &:hover {
    color: #009879;

    cursor: pointer;

    background-color: #f3f3f3;
  }
`;
