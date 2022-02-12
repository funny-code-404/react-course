import React from 'react';
import Card from '../Card/Card';

import { url } from './const';

class Request extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const res = await fetch(url);
    const data = await res.json();

    this.setState({
      data: data,
    });
    console.log(data);
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h3>Request:</h3>
        <Card data={data} />
      </div>
    );
  }
}

export default Request;
