import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

import ListItem from '../ListItem'

class List extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    showNames: PropTypes.bool,
  }

  render() {
    const { data, showNames } = this.props
    return (
      <ul className={showNames ? '' : 'phones'}>
        {data &&
          data.map((item) => (
            <ListItem key={item.id} data={data} {...item} showNames={showNames} />
          ))}
      </ul>
    )
  }
}

export default List
