import React from 'react'
import PropTypes from 'prop-types'

import './Container.css'

class Container extends React.Component {
  render () {
    const { maxWidth = 1000 } = this.props

    return (
      <div className="container" style={{ maxWidth }}>
        {this.props.children}
      </div>
    )
  }
}

Container.propTypes = {
  maxWidth: PropTypes.number,
  children: PropTypes.any
}

export default Container
