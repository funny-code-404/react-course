import { connect } from 'react-redux'

import DeleteForm from './DeleteForm'

import { ACTION_SET_RATING, ACTION_SET_REVIEW } from '../../ducks/deleteForm'

const mapStateToProps = ({ deleteForm }) => ({
  deleteForm,
})

const mapDispatchToProps = (dispatch) => ({
  setReview: (payload) => dispatch(ACTION_SET_REVIEW({ payload })),
  setRating: (payload) => dispatch(ACTION_SET_RATING({ payload })),
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm)
