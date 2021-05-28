import { connect } from 'react-redux'

import Todo from './Todo'

import { todoSelector } from '../../redux/todo/selectors'

const mapStateToProps = (state) => ({
  todo: todoSelector(state),
})

export default connect(mapStateToProps)(Todo)
