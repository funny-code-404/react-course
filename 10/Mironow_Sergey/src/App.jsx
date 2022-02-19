import './App.css';
import { PostList } from './Components/PostList/PostList';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Comments from './Components/Comments/Comments';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Link to='/posts'>Show posts</Link>
          </Route>
          <Route exact path='/posts'>
            <PostList/>
          </Route>
          <Route path='/posts/:id/comments'><Comments/></Route>

        </Switch>
      </Router>      
    </div>
  );
}

export default App;
