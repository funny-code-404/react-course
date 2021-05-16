import React from 'react'
import { connect } from 'react-redux'

import './styles.css'

import { dataSelector } from '../../redux/data/selectors'

import Notification from '../Notification'

class Board extends React.Component {
  render() {
    const { data } = this.props
    return (
      data && (
        <div className="cards">
          {data.map((item, i) => (
            <Notification key={i} item={item} />
          ))}
        </div>
      )
    )
  }
}

const mapStateToProps = (state) => ({
  data: dataSelector(state),
})

export default connect(mapStateToProps)(Board)
