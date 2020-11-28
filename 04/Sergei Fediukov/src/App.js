import React from 'react'
import './App.css';
import CarAdditionalInfo from './Components/CarAdditionalInfo'
import CarMainInfo from './Components/CarMainInfo'
import Result_list from './Components/Result_list'
import Result_table from './Components/Result_table'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carMainInfo: {
        name: '',
        year: '',
      },
      carAdditionalInfo: {
        country: '',
        used: '',
        damage: '',
      },
      cars: {
        count: 0,
        id: [],
        allcars_maininfo: [],
        allcars_addinfo: [],
      },
    }
  }
  handleMainInfoChange = (e) => {
    const { name } = e.target
    this.setState(prevState => ({
      ...prevState,
      carMainInfo: {
        ...prevState.carMainInfo,
        [name]: e.target.value
      }
    }))
    console.log(this.state)
  }
  handleAdditionalInfoChange = (e) => {
    const { name } = e.target
    this.setState(prevState => ({
      ...prevState,
      carAdditionalInfo: {
        ...prevState.carAdditionalInfo,
        [name]: e.target.value
      }
    }))
  }

  handleCheckBoxChange = (e) => {
    const { name, checked } = e.target
    this.setState(prevState => ({
      ...prevState,
      carAdditionalInfo: {
        ...prevState.carAdditionalInfo,
        [name]: checked
      }
    }))

  }

  handleClick = (e) => {
    e.preventDefault()
    const { count, id, allcars_maininfo, allcars_addinfo } = this.state.cars
    this.setState(prevState => ({
      ...prevState,
      cars: {
        ...prevState.cars,
        count: count + 1,
        allcars_maininfo: allcars_maininfo
          // .concat(Object.assign(this.state.carMainInfo, this.state.carAdditionalInfo)),???
          .concat(this.state.carMainInfo),
        allcars_addinfo: allcars_addinfo
          .concat(this.state.carAdditionalInfo),
        id: id
          .concat([count]),
      }
    }))
  }
  render() {
    return (
      <div className='App' >
        <form>
          <fieldset className="car_info">
            <CarMainInfo
              handleChange={this.handleMainInfoChange} />
            <CarAdditionalInfo
              handleChange={this.handleAdditionalInfoChange}
              handleClick={this.handleCheckBoxChange} />
            <button
              className="form_btn"
              onClick={this.handleClick}>
              В таблицу
            </button>
          </fieldset>
        </form >
        <div className='result'>
          <Result_list cars={this.state.cars} />
          <Result_table cars={this.state.cars} />
        </div>
      </div >
    )
  }
}

export default App;

