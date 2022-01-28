import { Component } from 'react'
import logo from '../../logo.svg'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="navMenu">
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Work</a>
            <a href="#">About</a>
            <div className="dot"></div>
          </nav>
        </div>
      </header>
    )
  }
}

export { Header }
