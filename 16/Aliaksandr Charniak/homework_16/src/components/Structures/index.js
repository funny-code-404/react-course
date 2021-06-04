import { connect } from 'react-redux'

import Structures from './Structures'

const mapStateToProps = (state) => ({
  data: state.structures,
})

export default connect(mapStateToProps)(Structures)
