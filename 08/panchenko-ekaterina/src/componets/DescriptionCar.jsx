import React, { useContext } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import DataContext from "./DataContext";

const DescriptionCar = ({ history }) => {
  const data = useContext(DataContext);
  const elemId = history.location.pathname.replace("/", "");
  const elem = data.find((item) => item.id === +elemId);

  if (!elem) {
    return null;
  }

  return (
    <Container>
      <Description key={elem.id}>
        <DescriptionText>Name:{elem.name}</DescriptionText>
        <DescriptionText>Price:{elem.avg_price}</DescriptionText>
        <DescriptionText>Нorsepower{elem.avg_horsepower}</DescriptionText>
        <DescriptionImg src={elem.img_url} />
      </Description>
    </Container>
  );
};

const Description = styled.ul`
  list-style: none;
`;

const DescriptionText = styled.li`
  font-size: 25px;
  text-transform: uppercase;
  margin-bottom: 5px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
`;

const DescriptionImg = styled.img``;

const Container = styled.div`
  width: 50%;
  border: 2px solid black;
  padding: 20px;
  margin-right: 25px;
`;

export default withRouter(DescriptionCar);
