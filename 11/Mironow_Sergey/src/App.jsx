import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Header, HEADERS } from './Components/Header/Header';
import { PostList } from './Components/PostList/Postlist';
import { TaskList } from './Components/TaskList/TaskList'



function App() {

  return (
    <div className="App">
      <Header/>
      <Switch>     
        <Route exact path = '/'>
          <Redirect to={HEADERS[0].path}/>
        </Route>
        <Route exact path = '/posts'>
          <PostList/>
        </Route>
        <Route exact path = '/todos'>
          <TaskList/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
