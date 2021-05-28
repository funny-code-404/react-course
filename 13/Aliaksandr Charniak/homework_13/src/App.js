import React from 'react'

import Game from './components/Game'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tic tac toe</h1>
        <Game />
      </div>
    )
  }
}

export default App
