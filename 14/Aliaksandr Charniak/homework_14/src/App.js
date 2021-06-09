import React from 'react'

import Board from './components/Board'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Game of life</h1>
        <Board />
      </div>
    )
  }
}

export default App
