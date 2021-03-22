import { Form, Home, PrivateRoute} from './components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <PrivateRoute path='/login' exact component={Form} />
          <PrivateRoute path='/signup' exact component={Form} />
          <PrivateRoute path='/delete' exact component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
