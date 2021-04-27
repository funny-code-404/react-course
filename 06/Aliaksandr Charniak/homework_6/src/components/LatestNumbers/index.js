import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class LatestNumbers extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  handleClick = () => {
    const { history } = this.props
    history.goBack()
  }
  render() {
    const {
      location: { state },
    } = this.props
    console.log(state)
    const it = { ...state?.data.filter((item) => item.name === state?.name)[0] }
    return (
      <>
        <h1>List of latest calls:</h1>
        <ul>
          {it?.latestcalls &&
            it?.latestcalls.map((item, i) => (
              <li key={i}>
                <Link
                  to={{
                    pathname: `/contacts/${state?.name}/${item}`,
                    state: {
                      data: state?.data,
                      phone: item,
                      name: it?.name,
                    },
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
        </ul>
        <button onClick={this.handleClick}>Back</button>
      </>
    )
  }
}

export default LatestNumbers
