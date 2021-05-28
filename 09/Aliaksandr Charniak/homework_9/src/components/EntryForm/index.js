import { connect } from 'react-redux'

import EntryForm from './EntryForm'

import { ACTION_SET_LEAVE_IN_SYSTEM } from '../../ducks/entryForm'

const mapStateToProps = ({ entryForm }) => ({
  entryForm,
})

const mapDispatchToProps = (dispatch) => ({
  setIsLeaveInSystem: (payload) => dispatch(ACTION_SET_LEAVE_IN_SYSTEM({ payload })),
})

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm)
