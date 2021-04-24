import React from 'react'
import PropTypes from 'prop-types'

import ListItem from '../ListItem'

class List extends React.Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
  }

  render() {
    const { children } = this.props
    return <ul>{children}</ul>
  }
}

List.Item = ListItem

export default List
