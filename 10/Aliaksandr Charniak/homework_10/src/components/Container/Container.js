import React from 'react'
import './styles.css'

class Container extends React.Component {
  render() {
    const { children } = this.props
    return <main className="main">{children}</main>
  }
}

export default Container
