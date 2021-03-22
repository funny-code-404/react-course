import React from 'react';
import { getTodos } from '../../ducks/todos.js';
import { getPosts } from '../../ducks/posts.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 4px;
  margin-right: 8px;

`

const paths = {
  todos: 'https://jsonplaceholder.typicode.com/todos',
  posts: 'https://jsonplaceholder.typicode.com/posts'
}

class Main extends React.Component {

  handleTodosClick = () => {
    const { onTodosClick, history } = this.props;
    onTodosClick(paths.todos);
    history.push('/todos');
  }

  handlePostsClick = () => {
    const { onPostsClick, history } = this.props;
    onPostsClick(paths.posts);
    history.push('/posts');
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleTodosClick}>TODOS</Button>
        <Button onClick={this.handlePostsClick}>POSTS</Button>
      </div>
    )
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  onTodosClick: (path) => dispatch(getTodos(path)),
  onPostsClick: (path) => dispatch(getPosts(path))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
