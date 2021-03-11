import React from 'react';
import PostInfo from './PostInfo.js'

const path = 'https://jsonplaceholder.typicode.com/posts/'

class PostInfoProvider extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    const { post } = this.props.match.params;
    try {
      fetch(`${path + post}`)
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
      <PostInfo data={data} />
    )
  }
}

export default PostInfoProvider;
