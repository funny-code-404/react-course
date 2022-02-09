import React from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import styled from 'styled-components';

// component
import List from './components/List/List';

// styled component
const Img = styled.img`
  display: block;
  max-width: 40%;
  margin: 20px auto;
`;

class App extends React.Component {
  state = {};

  async fetchData() {
    const res = await fetch(this.url);
    const data = await res.json();

    this.setState((prevState) => ({
      ...prevState,
      data,
    }));
  }

  sendData = (e) => {
    this.url = `https://dog.ceo/api/breed/${e}/images/random`;

    this.fetchData();

    console.log(`${e} dog image uploaded`);
  };

  render() {
    const link = this.state.data;

    return (
      <ErrorBoundary>
        <div className="App">
          <List nameDog={this.sendData} />
          {link && <Img src={link.message} alt="dog" />}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
