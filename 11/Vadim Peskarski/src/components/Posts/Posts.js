import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Post = styled.li`
  list-style-type: none;
  margin-top: 8px;

  :hover {
    font-weight: bold;
  }
`

class Todos extends React.Component {
  handleClick = (e) => {
    const { history } = this.props;
    history.push(`posts/${e.currentTarget.id}`)
  }

  render() {
    const { data } = this.props;
    return (
      <ul>
        {data.posts.map((element) => {
          return (
            <Post key={element.id} id={element.id} onClick={this.handleClick}>
              <p>{element.body}</p>
            </Post>
          )})}
      </ul>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  data: posts
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
