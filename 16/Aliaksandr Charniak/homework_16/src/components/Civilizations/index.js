import { connect } from 'react-redux'

import Civilizations from './Civilizations'

const mapStateToProps = (state) => ({
  data: state.civilizations,
})

export default connect(mapStateToProps)(Civilizations)
