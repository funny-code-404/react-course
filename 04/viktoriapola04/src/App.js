import React from 'react';
import Nav from './Nav/index';

const dogsName = ['dalmatian', 'bulldog', 'husky', 'shiba', 'doberman'];
class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      dogImd: '',
    };  
  };

  hendlFetch = (name) => {
    return fetch(`https://dog.ceo/api/breed/${name}/images/random`).then((res) => {
      return res.json().then(res => {
        return this.setState({
          dogImd: res.message,
        });
      })
    });
  };

  handlClick = (name) => {
    this.hendlFetch(name);
  };
  
  componentDidMount() {
    const random = dogsName[Math.floor(dogsName.length * Math.random())]
    this.hendlFetch(random);
    console.log('Собаки загружены');
  };
  
  render() {

    return (
      <>
        <Nav handlClick={this.handlClick} dogs={dogsName}/>
        <img className='img-container' src={this.state.dogImd}></img>
      </>
    );
  };
};

export default App;