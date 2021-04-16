import { Component } from 'react'
import City from '../City'
import './style.css'

class Weather extends Component {
  constructor(props) {
    super(props)
    this.state = { cityIds: [625144, 629634, 621074] }
  }

  render() {
    const { cityIds } = this.state
    return (
      <div className="weather">
        {cityIds.map((cityId) => (
          <City key={cityId} cityId={cityId} />
        ))}
      </div>
    )
  }
}

export default Weather
