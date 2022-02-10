import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

// components
import ContactsPage from './ContactsPage/ContactsPage';
import ContactInfoPage from './ContactInfoPage/ContactInfoPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ContactsPage} />
        <Route path="/info/:id" exact component={ContactInfoPage} />
      </Switch>
    </Router>
  );
}

export default App;
