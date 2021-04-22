import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '../ListItem'

class List extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    isDoneChange: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
  }

  render() {
    const { data, deleteItem, isDoneChange } = this.props
    return (
      <>
        <ul>
          {data &&
            data.map((item) => (
              <ListItem
                key={item.id}
                {...item}
                deleteItem={deleteItem}
                isDoneChange={isDoneChange}
              />
            ))}
        </ul>
      </>
    )
  }
}

export default List
