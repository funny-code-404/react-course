import React from "react";

import Header from "./components/Header";
import Img from "./components/Img";

const dog = [
  { name: "akita", id: 1 },
  { name: "chow", id: 2 },
  { name: "boxer", id: 3 },
  { name: "husky", id: 4 },
  { name: "mix", id: 5 },
];

class App extends React.Component {
  state = {
    activeImg: "",
  };

  handleFetch = (name) => {
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
      .then((res) => res.json())
      .then(({ message }) => {
        alert("Изображение загрузилось!");
        this.setState({
          activeImg: message,
        });
      });
  };

  handleChange = (name) => {
    this.handleFetch(name);
  };

  componentDidMount() {
    this.handleFetch("australian/shepherd");
  }

  render() {
    return (
      <>
        <Header handleChange={this.handleChange} dog={dog} />
        <Img src={this.state.activeImg} />
      </>
    );
  }
}

export default App;
