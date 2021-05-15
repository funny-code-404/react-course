import React from 'react'
import PropTypes from 'prop-types'

class CarInfo extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }

  handleClick = () => {
    const { history } = this.props
    history.goBack()
  }

  render() {
    const {
      location: { state },
      match: { params },
    } = this.props
    const car = { ...state?.data.filter((item) => item.id === +params?.id)[0] }
    return (
      <>
        <h1>
          Название: {car.make} {car.model}
        </h1>
        <h1>Цена: {car.price} $</h1>
        <h1>Мощность: {car.horsepower} л.с.</h1>
        <h1>Изображение:</h1>
        <img src={car.img_url} alt={`${car.make} ${car.model}`} />
        <button onClick={this.handleClick}>Back</button>
      </>
    )
  }
}

export default CarInfo
