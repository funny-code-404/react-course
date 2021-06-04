import { connect } from 'react-redux'

import Units from './Units'

const mapStateToProps = (state) => ({
  data: state.units,
})

export default connect(mapStateToProps)(Units)
