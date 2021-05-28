import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  width: 60%;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
  padding: 20px;

  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 3px;

  a {
    text-decoration: none;
    font-size: 1.2em;
    color: #000;
    :hover {
      color: #ff8a00;
    }
  }
`;
