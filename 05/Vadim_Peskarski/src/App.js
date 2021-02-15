import React from 'react';
import Provider from './components/Provider/Provider.js';

class App extends React.Component {

  render() {
    return (
      <Provider url ="https://api.thecatapi.com/v1/breeds">
        {(data) => <Provider.List data={data} />}
      </Provider>
    )
  }
}

export default App;
