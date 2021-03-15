import React from 'react';
import CatsProvider from './components/CatsProvider';
import BreedList from './components/BreedList';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <h1>Cat Breeds</h1>
          <p>Thinking about getting a cat but not sure which breed is right for you? We can help.</p>
        </div>
        <CatsProvider>
          {data => <BreedList data={data} />}
        </CatsProvider>
      </div>
    );
  }

}

export default App;
