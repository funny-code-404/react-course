import React from 'react'

import Image from './components/Image'
import Navigation from './components/Navigation'

class App extends React.Component {
  state = {
    url: 'https://dog.ceo/api/breeds/image/random',
    breed: 'random',
  }

  handleClick = (info) => {
    fetch(info.url)
      .then((data) => data.json())
      .then((msg) => {
        this.setState((prevState) => ({
          ...prevState,
          url: msg.message,
          breed: info.breed,
        }))
      })
      .then(alert('Собака была загружена'))
  }
  getDogUrl = (url) => {
    this.setState((prevState) => ({
      ...prevState,
      url: url,
    }))
  }

  render() {
    return (
      <>
        <Navigation onClick={this.handleClick} />
        <Image data={this.state} getDogUrl={this.getDogUrl} />
      </>
    )
  }
}

export default App
