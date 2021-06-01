import { connect } from 'react-redux'

import Cell from './Cell'

const mapStateToProps = (state) => ({
  boardData: state.game.boardData,
})

export default connect(mapStateToProps)(Cell)
