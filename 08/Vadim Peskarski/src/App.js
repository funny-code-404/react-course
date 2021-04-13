import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DataContextProvider from './context/DataContextProvider.js';
import List from './components/List/List.js';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <DataContextProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={List} />
              <Route path="/:id" exact component={List} />
            </Switch>
          </Router>
        </DataContextProvider>
      </div>
    )
  }
}

export default App;
