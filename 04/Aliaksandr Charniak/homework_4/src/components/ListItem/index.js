import React from 'react'
import PropTypes from 'prop-types'

class ListItem extends React.Component {
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    item: PropTypes.shape({
      url: PropTypes.string,
      breed: PropTypes.string,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const { id, item, onClick } = this.props
    return (
      <a key={id} href={`#${item.breed}`} id={id} onClick={onClick}>
        {item.breed}
      </a>
    )
  }
}

export default ListItem
