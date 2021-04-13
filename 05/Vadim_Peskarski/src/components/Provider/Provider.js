import React from 'react';
import List from './List/List.js';


class Provider extends React.Component {
  state = {
    data: null
  }

  componentDidMount() {
    const { url } = this.props;
    fetch(url)
    .then(data => data.json())
    .then(data => this.setState({
      data
    }))
    .catch(error => console.log(error))
  }

  render() {
    const { children } = this.props;
    const { data } = this.state;
    return (
      <>
        {data && children(data)}
      </>
    )
  }
}

Provider.List = List;

export default Provider;
