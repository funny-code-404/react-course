import styled from "styled-components";

export const CarListContainer = styled.div`
  margin-right: 50px;
  width: 30%;
  min-width: 300px;
  font-size: 1.3em;
  .link {
    :hover {
      color: #4f999e;
    }
  }
  .activeLink {
    color: #4f999e;
    font-weight: bold;
  }
`;
export const ListItem = styled.li`
  padding: 20px;
  border: 1px solid #000;
`;
