import React from 'react';

class PostInfo extends React.Component {

  render() {
    const { data } = this.props;
    return (data &&
      <div>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
      </div>
    )
  }
}

export default PostInfo;
