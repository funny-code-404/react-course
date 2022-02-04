import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header'
import ContactList from './Components/ContactList/ContactList';
import ContactCard from './Components/ContactCard/ContactCard';
import RecentCalls from './Components/RecentCalls/RecentCalls';


function App() {
  return (
    <Router>
      <div className="App">
          <Header/>
          <Switch>
            <Route exact path = '/'/> 
            <Route exact path = '/contacts' component={ContactList}/>
            <Route exact path = '/numbers' component={ContactList}/>
            <Route path = '/contacts/:card' component={ContactCard}/>
            <Route exact path = '/numbers/:phoneNumber' component={ContactCard}/>
            <Route path = '/numbers/:phoneNumber/recentcalls' component={RecentCalls}/>
          </Switch>
      </div>    
    </Router>
  )
}

export default App;
