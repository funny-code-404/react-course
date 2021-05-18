import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
`;

export const ListItem = styled.li`
  padding: 20px;

  a {
    text-decoration: none;
    font-size: 1.5em;
    color: #000;

    &.active {
      color: #ff8a00;
    }
    :hover {
      color: #ff8a00;
    }
  }
`;
