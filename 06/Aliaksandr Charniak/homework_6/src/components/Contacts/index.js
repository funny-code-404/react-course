import React from 'react'
import PropTypes from 'prop-types'

import List from '../List'

class Contacts extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  }

  state = {
    data: [
      {
        id: 0,
        name: 'Pasha',
        phone: '+375291111111',
        friends: ['Jenya', 'Liza', 'Oleg'],
        phones: ['+375292222222', '+375293333333', '+375294444444'],
        latestcalls: ['+375292222222', '+375293333333', '+375294444444'],
      },
      {
        id: 1,
        name: 'Jenya',
        phone: '+375292222222',
        friends: ['Pasha', 'Liza', 'Oleg'],
        phones: ['+375291111111', '+375293333333', '+375294444444'],
        latestcalls: ['+375291111111', '+375293333333', '+375294444444'],
      },
      {
        id: 2,
        name: 'Liza',
        phone: '+375293333333',
        friends: ['Pasha', 'Jenya', 'Oleg'],
        phones: ['+375291111111', '+375292222222', '+375294444444'],
        latestcalls: ['+375291111111', '+375292222222', '+375294444444'],
      },
      {
        id: 3,
        name: 'Oleg',
        phone: '+375294444444',
        friends: ['Pasha', 'Jenya', 'Liza'],
        phones: ['+375291111111', '+375292222222', '+375293333333'],
        latestcalls: ['+375291111111', '+375292222222', '+375293333333'],
      },
    ],
  }

  render() {
    const { data } = this.state
    const { location } = this.props
    return <List data={data} showNames={location.state?.showNames} />
  }
}

export default Contacts
