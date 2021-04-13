import React from 'react';
import Navigation from './components/Navigation';
import Image from './components/Image';
import { Div } from './styles';

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      breedName: '',
      dog: null,
    }
  }

  componentDidMount() {
    const dog = fetch('https://dog.ceo/api/breeds/image/random');
    dog
      .then(data => data.json())
      .then(dog => this.setState({ dog: dog.message }));
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.dog !== this.state.dog) {
      console.log("Image was loaded");
    }
    
  }

  handleClick = (dataDog) => {
    this.setState({ breedName: dataDog });
    const url = 'https://dog.ceo/api/breeds/image/random';// `https://dog.ceo/api/breed/${dataDog}/images/random`;
    const dog = fetch(url);
    dog
      .then(data => data.json())
      .then(dog => this.setState({ dog: dog.message }));
  }

  render() {
    const { dog } = this.state;
    return (
      <Div className="container" container={true}>
        <Navigation onClick={this.handleClick} />
        {Boolean(dog) && <Image src={dog} />}
      </Div>
    );
  }
}

export default App;
