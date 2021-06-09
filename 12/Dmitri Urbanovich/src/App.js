import Civilizations from './components/Civilizations';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/civilizations'>civilizations</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/civilizations' component={Civilizations} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
