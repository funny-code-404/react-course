import styled from "styled-components";

export const ContainerCarInfo = styled.div`
  padding: 20px;
  width: 40%;
  min-width: 300px;
  height: fit-content;
  border: 1px solid #000;
  text-align: center;
  font-size: 1.3em;

  .isHidden {
    display: none;
  }
`;

const setImg = (props) =>
  props.img ? `background: url(${props.img}) center center` : "";

export const ErrorImg = styled.div`
  margin-top: 10px;
  height: 200px;
  width: 100%;
  ${setImg};
  background-size: contain;
  background-repeat: no-repeat;
`;
