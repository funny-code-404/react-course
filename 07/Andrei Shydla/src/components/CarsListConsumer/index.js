import React from "react";
import DataContext from "../../context/DataContext";
import CarsList from "../CarsList";

class CarsListConsumer extends React.Component {
  render() {
    return (
      <DataContext.Consumer>
        {({ data }) => <CarsList data={data} />}
      </DataContext.Consumer>
    );
  }
}

export default CarsListConsumer;
