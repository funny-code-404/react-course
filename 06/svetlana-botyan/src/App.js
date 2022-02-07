/* eslint-disable import/no-unresolved */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactsPage from './components/ContactsPage';
import ContactInfoPage from './components/ContactInfoPage';
import LastNumbersPage from './components/LastNumbersPage/LastNumbersPage.jsx';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route>
          <Route path='/' exact component={ContactsPage} />
          <Route path='/name:id' exact component={ContactInfoPage} />
          <Route path='/name:id/lastNumbers' component={LastNumbersPage} />
          <Route path='/phone:id' component={ContactInfoPage} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
