import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { getResourcesRequested } from "./ducks/actions";
import { baseUrl } from "./api";
import { AuthProvider } from "./context/Auth.context";
import {
  Home,
  Civilizations,
  Technologies,
  Structures,
  Units,
  Item,
  SignUp,
  LogIn,
  Navigation,
  PrivateRoute,
} from "./components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResourcesRequested(baseUrl));
  }, []);

  return (
    <AuthProvider>
      <GlobalStyle />
      <Router>
        <Navigation />
        <main>
          <Switch>
            <Route path="/login" component={LogIn} />

            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/signup" component={SignUp} />
            <PrivateRoute path="/unit/:key" component={Item} />
            <PrivateRoute path="/units" component={Units} />
            <PrivateRoute path="/civilization/:key" component={Item} />
            <PrivateRoute path="/civilizations" component={Civilizations} />
            <PrivateRoute path="/structure/:key" component={Item} />
            <PrivateRoute path="/structures" component={Structures} />
            <PrivateRoute path="/technology/:key" component={Item} />
            <PrivateRoute path="/technologies" component={Technologies} />
          </Switch>
        </main>
      </Router>
    </AuthProvider>
  );
};
