import { connect } from 'react-redux'

import Technologies from './Technologies'

const mapStateToProps = (state) => ({
  data: state.technologies,
})

export default connect(mapStateToProps)(Technologies)
