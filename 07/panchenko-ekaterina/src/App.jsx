import React from "react";
import { CheckIn, Login, AccountDeleting } from "./components/Forms.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Form } from "./components/Form";
import styled from "styled-components";

const App = () => {
  return (
    <Router>
      <div className="App">
        <StyledLink to="/check-in">CheckIn</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/account-deleting">AccountDeleting</StyledLink>

        <Form
          render={() => (
            <Switch>
              <Route exact path="/" component={CheckIn} />
              <Route path="/check-in" component={CheckIn} />
              <Route path="/login" component={Login} />
              <Route path="/account-deleting" component={AccountDeleting} />
            </Switch>
          )}
        />
      </div>
    </Router>
  );
};

const StyledLink = styled(Link)`
  margin-left: 40px;
`;

export default App;
