import React, { Component } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import headers from "./components/Header/config";
class App extends Component {
  state = {
    imgDog: "",
  };

  fetchData(url) {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          console.log("Data was loaded.");
        }
        return res.json();
      })
      .then(({ message }) => this.setState({ imgDog: message }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.fetchData("https://dog.ceo/api/breeds/image/random");
  }

  onChangeImage = (breedDog) => {
    this.fetchData(`https://dog.ceo/api/breed/${breedDog}/images/random`);
  };

  render() {
    return (
      <div className="App">
        <Header headers={headers} onChangeImage={this.onChangeImage} />
        <Image img={this.state.imgDog} />
      </div>
    );
  }
}

export default App;
