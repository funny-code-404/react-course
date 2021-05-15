import styled from "styled-components";

export const Image = styled.div`
  margin: 50px auto;
  width: 100%;
  height: 500px;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: ${(props) => props.img && `url(${props.img})`};
`;
