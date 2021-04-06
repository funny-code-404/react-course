import React from 'react'

import Article from './components/Article'
import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './components/Navigation'
import './styles.css'

const data = [
  { country: 'Англия', capital: 'Лондон', peoples: 100 },
  { country: 'Франция', capital: 'Париж', peoples: 150 },
  { country: 'Япония', capital: 'Токио', peoples: 200 },
]

class App extends React.Component {
  state = {
    index: 0,
  }

  updateData = (value) => {
    this.setState({ index: value })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Navigation updateData={this.updateData} countrys={data} />
        <Article index={this.state.index} info={data} />
        <Footer />
      </div>
    )
  }
}

export default App
