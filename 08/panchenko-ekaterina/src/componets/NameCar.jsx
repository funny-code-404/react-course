import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DataContext from "./DataContext";

const NameCar = () => {
  const data = useContext(DataContext);

  return (
    <Container>
      {data.map(({ id, name }) => (
        <ModelCar key={id}>
          <Link to={`/${id}`}>{name}</Link>
        </ModelCar>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  width: 25%;
  border: 2px solid black;
  padding: 20px;
  list-style: none;
  margin-right: 25px;
`;

const ModelCar = styled.li`
  font-size: 25px;
  text-transform: uppercase;
  margin-bottom: 5px;
  padding: 5px;
  border: 2px solid black;
  text-align: center;
  cursor: pointer;
`;

export default NameCar;
