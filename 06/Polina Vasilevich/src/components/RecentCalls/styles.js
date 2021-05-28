import styled from "styled-components";

export const Info = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e8e8e8;

  .infoPhone {
    font-size: 1.5em;
    margin: 20px 0;
  }
`;

export const InfoItem = styled.p`
  font-size: 1.5em;
  margin: 20px 0;
`;

export const List = styled.ul`
  font-size: 1.5em;
`;

export const ListItem = styled.li`
  padding: 20px;
`;

const setPhoto = (props) =>
  props.photo ? `background: url(${props.photo}) center center` : "";

export const Photo = styled.div`
  height: 200px;
  width: 200px;

  ${setPhoto};
  background-size: cover;
  border-radius: 50%;
`;

export const GoBackButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 2em;
`;
