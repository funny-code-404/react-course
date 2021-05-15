import React from 'react'

import Container from './components/Container'
import Form from './components/Form'
import Board from './components/Board'

class App extends React.Component {
  render() {
    return (
      <Container>
        <h1>My applications</h1>
        <Form />
        <Board />
      </Container>
    )
  }
}

export default App
