import React from 'react'

import DataContext from './DataContext'
import CarsList from '../components/CarsList'

const url = 'https://private-anon-928e6d58e3-carsapi1.apiary-mock.com/cars'

class DataContextProvider extends React.Component {
  state = {
    data: {},
  }

  componentDidMount() {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('The request returned an error.')
        }
      })
      .then((data) => this.setState({ data }))
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { data } = this.state
    return (
      <DataContext.Provider
        value={{
          data,
        }}
      >
        <CarsList />
      </DataContext.Provider>
    )
  }
}

export default DataContextProvider
