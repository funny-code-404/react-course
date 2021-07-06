import React from "react";
import styled from "styled-components";

import DogsTable from "./components/DogsTable";

const Img = styled.img`
  max-width: 800px;
`;

class App extends React.Component {
  state = {};

  // get breed, send obj with link to state
  sendData = (clickedDog) => {
    this.url = `https://dog.ceo/api/breed/${clickedDog}/images/random`;

    this.getData().then((dogLink) =>
      this.setState({
        clickedDogLink: dogLink,
      })
    );
  };

  getData() {
    return fetch(this.url).then((res) => res.json());
  }

  render() {
    const link = this.state.clickedDogLink;

    return (
      <div>
        <DogsTable sendData={this.sendData} />
        <div>{link && <Img src={link.message} alt="doggie" />}</div>
      </div>
    );
  }
}

export default App;
