import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { config } from "./config";
import "./App.css";

function App() {
  const { routes, contacts } = config;
  return (
    <div className="App">
      <Header routes={routes} />
      <Switch>
        <Route path="/home" component={Main} />
        <Route path="/about" component={Main} />
        <Route path="/servicing" component={Main} />
        <Route path="/contact" component={Main} />
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer contacts={contacts} />
    </div>
  );
}

export default withRouter(App);
