import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "@components/Header";
import Spinner from "@components/Spinner";
import routesConfig from "@routes/routesConfig";

const App = () => {
  return (
    <>
      <Spinner />
      <Router>
        <Header />
        <Switch>
          {routesConfig.map(({ path, exact, component }, index) => (
            <Route
              key={index}
              path={path}
              exact={exact}
              component={component}
            ></Route>
          ))}
        </Switch>
      </Router>
    </>
  );
};

export default App;
