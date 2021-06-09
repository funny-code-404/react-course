import { connect } from 'react-redux'

import Board from './Board'

const mapStateToProps = (state) => ({
  data: state.game,
})

export default connect(mapStateToProps)(Board)
