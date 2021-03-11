import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Todo = styled.li`
  list-style-type: none;
  margin-top: 8px;

  :hover {
    font-weight: bold;
  }
`

class Todos extends React.Component {
  handleClick = (e) => {
    const { history } = this.props;
    history.push(`todos/${e.currentTarget.id}`)
  }

  render() {
    const { data } = this.props;
    return (
      <ul>
        {data.todos.map((element) => {
          return (
            <Todo key={element.id} id={element.id} onClick={this.handleClick}>
              <p>{element.title}</p>
            </Todo>
          )})}
      </ul>
    )
  }
}

const mapStateToProps = ({ todos }) => ({
  data: todos
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
