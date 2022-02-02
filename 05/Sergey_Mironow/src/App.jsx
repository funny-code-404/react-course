import React from 'react';
import './App.scss';
import DogTable from './components/DogTable/DogTable';
import ImageArea from './components/ImageArea/ImageArea';

class App extends React.Component {
  state = {
    dogBreeds: [],
    takenBreed: ''
  }

  async componentDidMount(){
    const dogBreeds = Object.keys((await (await fetch('https://dog.ceo/api/breeds/list/all')).json()).message)
    this.setState((prevState) => ({
      ...prevState,
      dogBreeds: dogBreeds,
    }))

  }

  takeBreed = (breed) => {
    this.setState((prevState) => ({
      ...prevState,
      takenBreed: breed
    }))

  }

  render(){
    return (
      <div className="App">
        <DogTable dogBreeds = {this.state.dogBreeds} giveBreed = {this.takeBreed}/>
        <ImageArea breed = {this.state.takenBreed}/>
      </div>
    )
  }
}

export default App;
