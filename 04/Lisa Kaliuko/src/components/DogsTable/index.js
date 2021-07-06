import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const url = "https://dog.ceo/api/breeds/list/all";

class DogsTable extends React.Component {
  state = {};

  // get list of dogs
  getData() {
    return fetch(url).then((res) => res.json());
  }

  // send obj dogs (list of all dogs) to state
  componentDidMount() {
    this.getData().then((dogs) => this.setState({ dogs }));
  }

  // send to App breed of clicked dog
  handleDogClick = (e) => {
    const { sendData } = this.props;
    sendData(e.target.innerText);
  };

  // click creates arr from 5 random dogs, send arr to state
  handleButtonClick = () => {
    const dogs = this.state.dogs.message;
    const dogsArray = [];
    const randomDogsArray = [];

    for (let key in dogs) {
      dogsArray.push(key);
    }

    for (let i = 0; i < 5; i++) {
      randomDogsArray.push(
        dogsArray[Math.abs(Math.round(Math.random() * 100 - 5))]
      );
    }

    this.setState({ randomDogsArray });
  };

  render() {
    const { randomDogsArray } = this.state;

    return (
      <Container>
        {randomDogsArray && (
          <p onClick={this.handleDogClick}>{randomDogsArray[0]}</p>
        )}
        {randomDogsArray && (
          <p onClick={this.handleDogClick}>{randomDogsArray[1]}</p>
        )}
        {randomDogsArray && (
          <p onClick={this.handleDogClick}>{randomDogsArray[2]}</p>
        )}
        {randomDogsArray && (
          <p onClick={this.handleDogClick}>{randomDogsArray[3]}</p>
        )}
        {randomDogsArray && (
          <p onClick={this.handleDogClick}>{randomDogsArray[4]}</p>
        )}
        <button onClick={this.handleButtonClick}>Get dogs</button>
      </Container>
    );
  }
}

export default DogsTable;
