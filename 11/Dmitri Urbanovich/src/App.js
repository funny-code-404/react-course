import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Todos from './Components/Todos';
import Posts from './Components/Posts';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/todos'>Todos</Link>
            </li>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/todos' component={Todos} />
          <Route path='/posts' component={Posts} />          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
