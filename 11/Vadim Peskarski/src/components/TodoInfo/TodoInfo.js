import React from 'react';

class TodoInfo extends React.Component {

  render() {
    const { data } = this.props;
    return (
      data &&
      <div>
        <h3>{'User № ' + data.userId}</h3>
        <p>{data.title}</p>
        <p>{data.completed ? 'Completed' : 'Incomleted'}</p>
      </div>
    )
  }
}

export default TodoInfo;
