import React from 'react'
import PropTypes from 'prop-types'

class Image extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      url: PropTypes.string,
      breed: PropTypes.string,
    }).isRequired,
    getDogUrl: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { data, getDogUrl } = this.props
    fetch(data.url)
      .then((data) => data.json())
      .then((msg) => {
        getDogUrl(msg.message)
      })
      .then(alert('Собака была загружена'))
  }

  render() {
    const { url, breed } = this.props.data
    return <img src={url} alt={breed}></img>
  }
}

export default Image
