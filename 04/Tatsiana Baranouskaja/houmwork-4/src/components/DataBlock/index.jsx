import React from 'react';

const url = 'https://jsonplaceholder.typicode.com/posts';
class DataBlock extends React.Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    fetch(url) 
      .then((data) => data.json())
      .then((data) => 
        this.setState(({
          data
        })));
    
  }

  render() {
    const { data } = this.state;

    return <div>
      {!!data.length && data.map(item => <p key={item.id}>{item.title}</p>)}
    </div>;
  }
}

export default DataBlock;
