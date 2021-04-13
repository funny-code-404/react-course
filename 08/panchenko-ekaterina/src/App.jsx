import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NameCar from "./componets/NameCar.jsx";
import DescriptionCar from "./componets/DescriptionCar.jsx";
import styled from "styled-components";
import DataContextProvider from "./componets/DataContextProvider";

const App = () => {
  return (
    <Router>
      <Container>
        <DataContextProvider>
          <NameCar />
          <DescriptionCar />
        </DataContextProvider>
      </Container>
    </Router>
  );
};

const Container = styled.div`
  display: flex;
`;

export default App;
