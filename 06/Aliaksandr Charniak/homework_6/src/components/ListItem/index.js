import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ListItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    showNames: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    const { name, phone, showNames, data } = this.props
    return (
      <li>
        {showNames ? (
          <Link
            to={{
              pathname: `/contacts/${name}`,
              state: {
                data: data,
                name: name,
                phone: phone,
              },
            }}
          >
            {name}
          </Link>
        ) : (
          <Link
            to={{
              pathname: `/contacts/${name}/${phone}`,
              state: {
                data: data,
                name: name,
                phone: phone,
              },
            }}
          >
            {phone}
          </Link>
        )}
      </li>
    )
  }
}
export default ListItem
