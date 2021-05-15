import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import AccountDeleting from './components/AccountDeleting';
import CheckIn from './components/CheckIn';
import LogIn from './components/LogIn';
import GlobalStyles from './components/GlobalStyles/style.js';

const App = () => {
  return (
    <>
    <GlobalStyles />
     <Router>
        <LinkContainer>
          <Link to="/CheckIn">
            <LinkButton>
              Check In
            </LinkButton>
          </Link>
          <Link to="/LogIn">
            <LinkButton>
              Log In
            </LinkButton>
          </Link>
          <Link to="/DeletingAccount">
            <LinkButton>
              Delete Account
            </LinkButton>
          </Link> 
        </LinkContainer>
       <Switch>
          <Route path="/CheckIn" component={CheckIn} />
          <Route path="/LogIn" component={LogIn}/>
          <Route path="/DeletingAccount" component={AccountDeleting}/>
        </Switch>
    </Router>
    </>
  )
}

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  margin: 30px auto;
`;

const LinkButton = styled.button`
  width: 150px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 10px;
`;

export default App;
