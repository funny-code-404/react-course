import React from 'react';
import './App.css';
import Main from './components/Main/Main.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Todos from './components/Todos/Todos.js';
import Posts from './components/Posts/Posts.js';
import PostInfoProvider from './components/PostInfo/PostInfoProvider.js';
import TodoInfoProvider from './components/TodoInfo/TodoInfoProvider.js';

class App extends React.Component {

  render() {
    return (
        <div className="App">
          <Router>
          <Main />
          <Switch>
            <Route path="/todos" exact component={Todos} />
            <Route path="/todos/:todo" component={TodoInfoProvider}/>
            <Route path="/posts" exact component={Posts} />
            <Route path="/posts/:post" component={PostInfoProvider}/>
          </Switch>
          </Router>
        </div>
    )
  }
}

export default App;
