import { connect } from 'react-redux'

import ActionButton from './ActionButton'

import { ACTION_SET } from '../../ducks/actionButton'

const mapStateToProps = ({ actionButton }) => ({
  actionButton,
})

const mapDispatchToProps = (dispatch) => ({
  onClick: (payload) => dispatch(ACTION_SET({ payload })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton)
