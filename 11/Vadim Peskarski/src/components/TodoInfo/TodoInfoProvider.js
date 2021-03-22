import React from 'react';
import TodoInfo from './TodoInfo.js'

const path = 'https://jsonplaceholder.typicode.com/todos/'

class TodoInfoProvider extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    const { todo } = this.props.match.params;
    try {
      fetch(`${path + todo}`)
        .then((data) => data.json())
        .then((result) => this.setState({
          data: result
        }))
    } catch (error) {
      console.warn(error)
    }
  }

  render() {
    const { data } = this.state;
    return (
      <TodoInfo data={data} />
    )
  }
}

export default TodoInfoProvider;
