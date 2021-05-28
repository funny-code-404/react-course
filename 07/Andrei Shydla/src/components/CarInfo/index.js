import React from "react";

class CarInfo extends React.Component {
  componentDidMount() {
    // console.log("componentDidMount");
    const { data, addOpenedCarData, carDataOpened, currentId } = this.props;
    const existIdAtCarDataOpened = carDataOpened.filter(
      (item) => item.id === Number(currentId)
    );

    if (existIdAtCarDataOpened.length === 0) {
      const currentCarInfo = data.filter(
        (item) => item.id === Number(currentId)
      );
      // console.log(`send to add ${JSON.stringify(currentCarInfo[0])}`);
      addOpenedCarData(currentCarInfo[0]);
    }
  }

  render() {
    console.log("carInfo Render");
    // console.log(this.props);

    const { data, carDataOpened, currentId } = this.props;
    const existIdAtCarDataOpened = carDataOpened.filter(
      (item) => item.id === Number(currentId)
    );

    let sourceData = "";
    if (existIdAtCarDataOpened.length > 0) {
      // console.log("from carDataOpened");
      sourceData = existIdAtCarDataOpened[0];
    } else {
      // console.log("from DATA");
      const currentCarInfo = data.filter(
        (item) => item.id === Number(currentId)
      );
      sourceData = currentCarInfo[0];
    }

    const { year, make, model, horsepower, price, img_url } = sourceData;
    // console.log(id, year, make, model, horsepower, price, img_url);

    return (
      <>
        <h2>{`${make} ${model}`}</h2>
        <p>{`price: ${price} `}</p>

        <p>{`horsepower: ${horsepower}`}</p>
        <p>{`year: ${year} `}</p>

        <div>
          <img
            src={img_url}
            alt={`${make} ${model} car`}
            style={{ height: 300 + "px" }}
          />
        </div>
      </>
    );
  }
}

export default CarInfo;
