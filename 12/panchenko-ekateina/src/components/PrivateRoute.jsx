import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  const shouldNotBeRedirected =
    rest.path !== "/signup" ? currentUser : !currentUser;

  return (
    <Route
      {...rest}
      render={(props) =>
        shouldNotBeRedirected ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};
