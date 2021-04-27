import React from "react";
import Navigation from "./components/Navigation";
import Image from "./components/Image";

const breeds = ['chihuahua', 'labrador', 'pitbull', 'shiba', 'mix'];

class App extends React.Component {
  state = {
    image: null,
  };
  handleClick = (data) =>
    this.setState({
      image: data.message,
    });
  componentDidMount() {
    const { image } = this.state;

    if (!image) {
      let url = 'https://dog.ceo/api/breeds/image/random';
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          this.setState({
            image: data.message,
          });
        });
    }
  }
  render() {
    const { image } = this.state;
    return (
      <>
        <Navigation dogs={breeds} onClick={this.handleClick}/>
        {image && <Image source={image}/>}
      </>
    );
  }
}
export default App;
