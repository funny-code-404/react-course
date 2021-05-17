import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const ListItem = styled.li`
  padding: 20px;

  a {
    text-decoration: none;
    font-size: 1.2em;
    color: #000;
    :hover {
      color: #ff8a00;
    }
  }
`;
