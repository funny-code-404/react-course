import { Component } from 'react';

class DataList extends Component {
  handleClick = () => {
    const { getUsersData, url } = this.props;

    getUsersData(url);
  };

  render() {
    const { usersData } = this.props;

    return (
      <div className='App'>
        <header className='App-header'>
          <button onClick={this.handleClick}>Get data</button>
        </header>
        <ul>
          {usersData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataList;