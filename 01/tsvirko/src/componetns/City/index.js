import { Component } from 'react'

import { urlCurrntWeather } from '../../api/weather'

import './style.css'

class Сity extends Component {
  constructor(props) {
    super(props)
    this.state = { data: {}, isLodding: true, error: '' }
  }

  async componentDidMount() {
    const { cityId } = this.props
    this.setState({ ...this.state, isLoading: true })
    try {
      const response = await fetch(`${urlCurrntWeather}&city_id=${cityId}`)

      const {
        data: [{ city_name, temp, wind_spd, wind_cdir_full }],
      } = await response.json()

      this.setState({
        ...this.setState,
        data: { city_name, temp, wind_spd, wind_cdir_full },
        isLoading: false,
      })
    } catch (error) {
      this.setState({ ...this.state, error, isLoading: false })
    }
  }

  render() {
    const {
      isLoading,
      error,
      data: { city_name, temp, wind_spd, wind_cdir_full },
    } = this.state

    if (isLoading) {
      return <h4>Lodding</h4>
    }

    if (error) {
      return <h4>{error}</h4>
    }

    return (
      <div className="city">
        <h3>{`город ${city_name}`}</h3>
        <h4>{`температура: ${temp}`}</h4>
        <h4>{`скорость ветра: ${wind_spd} м/с`}</h4>
        <h4>{`напрвеление ветра: ${wind_cdir_full}`}</h4>
      </div>
    )
  }
}

export default Сity
