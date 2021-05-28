import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import ContactList from "./components/ContactList";
import ContactInfo from "./components/ContactInfo";
import RecentCalls from "./components/RecentCalls";
import NotFoundPage from "./components/NotFoundPage";
import { routes, data } from "./data";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Header routes={routes} />
        <Switch>
          <Route path="/" exact />
          <Route
            exact
            path="/contacts"
            render={(props) => (
              <ContactList data={data} isContactName {...props} />
            )}
          />

          <Route
            exact
            path="/numbers"
            render={(props) => <ContactList data={data} {...props} />}
          />
          <Route
            exact
            path="/contacts/:name"
            render={(props) => (
              <ContactInfo data={data} isContactName {...props} />
            )}
          />
          <Route
            exact
            path="/numbers/:phone"
            render={(props) => <ContactInfo data={data} {...props} />}
          />
          <Route
            path="/contacts/:name/recentcalls"
            render={(props) => <RecentCalls data={data} {...props} />}
          />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
