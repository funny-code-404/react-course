import React from 'react'

import DataContext from '../../context/DataContext'
import LinksList from '../LinksList'

class CarsList extends React.Component {
  render() {
    return <DataContext.Consumer>{({ data }) => <LinksList data={data} />}</DataContext.Consumer>
  }
}

export default CarsList
