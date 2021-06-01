import { connect } from 'react-redux'

import Table from './Table'

const mapStateToProps = (state) => ({
  data: state.game,
})

export default connect(mapStateToProps)(Table)
