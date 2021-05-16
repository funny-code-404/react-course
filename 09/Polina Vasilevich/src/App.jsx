import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import routesConfig from "./routes/routesConfig";

const App = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/todos">Todos</Link>
      <Link to="/posts">Posts</Link>
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
  );
};

export default App;
