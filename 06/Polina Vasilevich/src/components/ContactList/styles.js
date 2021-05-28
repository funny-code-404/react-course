import styled from "styled-components";

export const List = styled.ul`
  width: 60%;
  margin: 20px auto;
  font-size: 1.5em;
`;

export const ListItem = styled.li`
  padding: 20px;
  display: flex;
  align-items: center;
  border: 1px solid #e8e8e8;

  
  }
`;

const setPhoto = (props) =>
  props.photo ? `background: url(${props.photo}) center center` : "";

export const Photo = styled.div`
  margin-right: 20px;
  height: 90px;
  width: 90px;

  ${setPhoto};
  background-size: cover;
  border-radius: 50%;
`;
