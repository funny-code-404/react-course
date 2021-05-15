import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class LinksList extends React.Component {
  static propTypes = {
    data: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]).isRequired,
  }
  render() {
    const { data } = this.props

    return Boolean(data?.length) ? (
      <div>
        {data.map((car) => (
          <ul key={car.id}>
            <Link
              to={{
                pathname: `/car/${car.id}`,
                state: {
                  data: data,
                },
              }}
              key={car.id}
            >
              {car.make} {car.model}
            </Link>
          </ul>
        ))}
      </div>
    ) : (
      <h1>No data...</h1>
    )
  }
}

export default LinksList
