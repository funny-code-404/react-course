import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  NavLink,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { getResourcesRequested } from "./ducks/actions";
import { baseUrl } from "./api";
import {
  Home,
  Civilizations,
  Technologies,
  Structures,
  Units,
  Item,
} from "./components";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResourcesRequested(baseUrl));
  }, []);

  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/civilizations">Civilizations</NavLink>
            </li>
            <li>
              <NavLink to="/units">Units</NavLink>
            </li>
            <li>
              <NavLink to="/structures">Structures</NavLink>
            </li>
            <li>
              <NavLink to="/technologies">Technologies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/unit/:key" component={Item} />
          <Route path="/units" component={Units} />
          <Route path="/civilization/:key" component={Item} />
          <Route path="/civilizations" component={Civilizations} />
          <Route path="/structure/:key" component={Item} />
          <Route path="/structures" component={Structures} />
          <Route path="/technology/:key" component={Item} />
          <Route path="/technologies" component={Technologies} />
        </Switch>
      </main>
    </Router>
  );
};
