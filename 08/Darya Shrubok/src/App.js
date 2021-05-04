import React from "react";
import "./styles.css";
import Form from "./components/Form";
import withLoginTemplate from "./hocs/withLoginTemplate";
import withSignupTemplate from "./hocs/withSignupTemplate";
import withDeleteTemplate from "./hocs/withDeleteTemplate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const LoginForm = withLoginTemplate(Form);
  const SignupForm = withSignupTemplate(Form);
  const DeleteForm = withDeleteTemplate(Form);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Form title="FORM" />
        </Route>
        <Route path="/login" exact>
          <LoginForm title="LOGINFORM" />
        </Route>
        <Route path="/signup" exact>
          <SignupForm title="SIGNUPFORM" />
        </Route>
        <Route path="/delete" exact>
          <DeleteForm title="DELETEFORM" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
