import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { paths } from "../../config";

const PrivateRoute = ({ auth, component: Component, ...rest }) => (
	<Route { ...rest } render={ props => (
		auth.user  ? <Component {...props} /> : <Redirect to={{ pathname: paths.login }} />
	)} />
)

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PrivateRoute);