import { connect } from 'react-redux'

import LoginForm from './LoginForm'

import { ACTION_SET_VALUE } from '../../ducks/loginForm'

const mapStateToProps = ({ loginForm, actionButton }) => ({
  loginForm,
  actionButton,
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (name, value) => dispatch(ACTION_SET_VALUE({ name, value })),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
