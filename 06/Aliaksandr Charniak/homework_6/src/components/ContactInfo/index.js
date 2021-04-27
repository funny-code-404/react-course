import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ContactInfo extends React.Component {
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
    const it = { ...state?.data.filter((item) => item.name === state?.name)[0] }
    return (
      <>
        <h1>Номер телефона:</h1>
        <Link
          to={{
            pathname: `/contacts/${state?.name}/${it?.phone}/latestcalls`,
            state: {
              data: state?.data,
              name: state?.name,
              phone: it?.phone,
            },
          }}
        >
          {it?.phone}
        </Link>
        <h1>Список друзей:</h1>
        <ul>
          {it?.friends &&
            it?.friends.map((item, i) => (
              <li key={i}>
                <Link
                  to={{
                    pathname: `/contacts/${item}`,
                    state: {
                      data: state?.data,
                      name: item,
                      phone: it?.phone,
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

export default ContactInfo
