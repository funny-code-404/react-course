import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Todos from './components/Todos'
import Todo from './components/Todo'
import Posts from './components/Posts'
import Post from './components/Post'
import Spinner from './components/Spinner'

import './styles.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Spinner />
        <h1>Redux App</h1>
        <Router>
          <nav className="navigation">
            <Link
              to={{
                pathname: '/todos',
              }}
            >
              Todos
            </Link>
            <Link
              to={{
                pathname: '/posts',
              }}
            >
              Posts
            </Link>
          </nav>

          <Switch>
            <Route path="/todos" exact component={(props) => <Todos {...props} />} />
            <Route path="/todos/:id" exact component={(props) => <Todo {...props} />} />
            <Route path="/posts" exact component={(props) => <Posts {...props} />} />
            <Route path="/posts/:id" exact component={(props) => <Post {...props} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
