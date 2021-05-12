import React from "react";
import DataContext from "./DataContext";

const url = "https://private-anon-928e6d58e3-carsapi1.apiary-mock.com/cars";

class DataContextProvider extends React.Component {
  state = {
    data: {},
  };
  componentDidMount() {
    fetch(url)
      .then((data) => data.json())
      .then((data) =>
        this.setState((prevState) => ({
          ...prevState,
          data: data,
        }))
      );
  }
  render() {
    const { data } = this.state;
    const { children } = this.props;
    return (
      <DataContext.Provider
        value={{
          data,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
