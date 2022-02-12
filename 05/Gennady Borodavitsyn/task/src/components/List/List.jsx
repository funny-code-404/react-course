import React from 'react';
import styled from 'styled-components';

// component
const url = 'https://dog.ceo/api/breeds/list/all';

// styled component
const Ul = styled.ul`
  color: blue;
  list-style-type: none;
  border: solid 2px black;
`;
const Li = styled.li`
  cursor: pointer;
`;
const Div = styled.div`
  width: 30%;
  margin: 0 auto;
`;

class List extends React.PureComponent {
  state = {};

  async fetchData() {
    const res = await fetch(url);
    const data = await res.json();

    this.setState((prevState) => ({
      ...prevState,
      data,
    }));
  }

  componentDidMount() {
    this.fetchData();
  }

  handleButtonClick = () => {
    const dogs = this.state.data.message;
    const dogsArray = [];
    const randomDogsArray = [];

    for (let key in dogs) {
      dogsArray.push(key);
    }

    for (let i = 0; i < 5; i++) {
      randomDogsArray.push(
        dogsArray[Math.floor(Math.random() * dogsArray.length)]
      );
    }

    this.setState({ randomDogsArray });
  };

  handleLiClick = (e) => {
    const { nameDog } = this.props;
    nameDog(e.target.innerText);
  };

  render() {
    const { randomDogsArray } = this.state;
    return (
      <Div>
        <h1>Dogs</h1>
        <Ul>
          {randomDogsArray &&
            randomDogsArray.map((dogName) => (
              <Li key={dogName} onClick={this.handleLiClick}>
                {dogName}
              </Li>
            ))}
        </Ul>
        <button onClick={this.handleButtonClick}>
          {randomDogsArray ? 'random dogs' : 'get 5 dogs'}
        </button>
      </Div>
    );
  }
}

export default List;
