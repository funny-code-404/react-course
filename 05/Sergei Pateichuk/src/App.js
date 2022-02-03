import React from "react";
import "./App.css";
import Navigation from "./Navigation";
import DogImage from "./DogImage";

class App extends React.Component {
  state = {
    dogs: ["akita", "chow", "boxer", "husky", "mix"],
    Image:"",
  };

  handleFetch = (name) => {
    fetch(`https://dog.ceo/api/breed/${name}/images/random`)
      .then((response) => response.json())
      .then(({ message }) => {
        console.log("Image uploaded! ");
        this.setState({
          Image: message,
        });
      });
  };


  async componentDidMount(){
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
    const data = await response.json();
    this.setState({ data });
  }


  render() {

    return (
      <div className="App">
        <Navigation dogs={this.state.dogs} handleFetch={this.handleFetch}/>
        <DogImage src={this.state.Image}/>
      </div>
    );
  }
}

export default App;
