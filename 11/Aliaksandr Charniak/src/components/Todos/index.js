import { connect } from 'react-redux'

import Todos from './Todos'

import { todosSelector } from '../../redux/todos/selectors'

const mapStateToProps = (state) => ({
  todos: todosSelector(state),
})

export default connect(mapStateToProps)(Todos)
