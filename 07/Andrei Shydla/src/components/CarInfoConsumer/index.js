import React from "react";
import DataContext from "../../context/DataContext";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CarInfo from "../CarInfo";

class CarInfoConsumer extends React.Component {
  render() {
    // console.log(this.props);
    // console.log(this.props.match.params.id);
    const { match } = this.props;
    // console.log(match);

    return (
      <DataContext.Consumer>
        {({ data, carDataOpened, addOpenedCarData }) => (
          <CarInfo
            data={data}
            carDataOpened={carDataOpened}
            addOpenedCarData={addOpenedCarData}
            currentId={match.params.id}
          />
        )}
      </DataContext.Consumer>
    );
  }
}

export default CarInfoConsumer;
