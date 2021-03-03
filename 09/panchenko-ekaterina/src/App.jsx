import React from "react";
import { CheckIn, Login, AccountDeleting } from "./components/Forms.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Form } from "./components/Form";
import styled from "styled-components";

const App = () => (
  <Router>
    <div className="App">
      <StyledLink to="/check-in">CheckIn</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/account-deleting">AccountDeleting</StyledLink>

      <Form
        render={(props) => (
          <Switch>
            <Route exact path="/">
              <CheckIn {...props} />
            </Route>
            <Route path="/check-in">
              <CheckIn {...props} />
            </Route>
            <Route path="/login">
              <Login {...props} />
            </Route>
            <Route path="/account-deleting">
              <AccountDeleting {...props} />
            </Route>
          </Switch>
        )}
      />
    </div>
  </Router>
);

const StyledLink = styled(Link)`
  margin-left: 40px;
`;

export default App;
