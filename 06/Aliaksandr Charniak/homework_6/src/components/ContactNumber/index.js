import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ContactNumber extends React.Component {
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
    const it = { ...state?.data.filter((item) => item.phone === state?.phone)[0] }
    return (
      <>
        <h1>Имя:</h1>
        <h2>{it?.name}</h2>
        <h1>Список телефонов:</h1>
        <ul>
          {it?.phones &&
            it?.phones.map((item, i) => (
              <li key={i}>
                <Link
                  to={{
                    pathname: `/contacts/${it?.name}/${item}`,
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

export default ContactNumber
