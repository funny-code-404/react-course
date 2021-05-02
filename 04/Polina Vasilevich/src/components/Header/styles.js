import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;

  box-shadow: rgba(102, 102, 102, 0.06) 0px 5px 7px;
`;

export const ListItem = styled.li`
  margin: 5px;
  padding: 20px;
  font-size: 1.5rem;
  color: #000;

  list-style-type: none;

  :hover {
    color: #dd604a;
    cursor: pointer;
  }

  &.active-header {
    color: #dd604a;
  }
`;
