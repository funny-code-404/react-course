import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Contacts from "./components/Contacts";
import Person from "./components/Person";

function App() {
  return (
    <Router>
      <nav className='navigation'>
        <Link to={{
            pathname: '/contacts',
            isContact: true,

        }}
        >Contacts</Link>
        <Link to={ '/numbers'}>Numbers</Link>
      </nav>
      <Switch>

        <Route path="/contacts" exact component={Contacts} />
        <Route path="/numbers" exact component={Contacts} />
        <Route path='/contacts/:id' exact component={Person} />

      </Switch>
    </Router>
  );
}

export default App;
