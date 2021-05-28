import { connect } from 'react-redux'

import RegisterForm from './RegisterForm'

import { ACTION_SET_REGISTER_VALUE } from '../../ducks/registerForm'

const mapStateToProps = ({ registerForm }) => ({
  registerForm,
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (name, value) => dispatch(ACTION_SET_REGISTER_VALUE({ name, value })),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
