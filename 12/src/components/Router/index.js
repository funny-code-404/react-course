import { Switch, Route } from "react-router-dom";

import { Civilizations, Home, Units, Structures, Technologies, Item, NotFound, Login, SingUp } from "../../pages";
import PrivateRoute from "../PrivateRouter";

const Routers = () => (
	<Switch>
		<PrivateRoute path='/' exact component={Home} />
		<Route path='/login' exact component={Login} />
		<Route path='/signup' exact component={SingUp} />
		<PrivateRoute path='/civilizations' exact component={Civilizations} />
		<PrivateRoute path='/units' exact component={Units} />
		<PrivateRoute path='/structures' exact component={Structures} />
		<PrivateRoute path='/technologies' exact component={Technologies} />

		<PrivateRoute path='/civilizations/:id' exact component={Item} />
		<PrivateRoute path='/units/:id' exact component={Item} />
		<PrivateRoute path='/structures/:id' exact component={Item} />
		<PrivateRoute path='/technologies/:id' exact component={Item} />
		<PrivateRoute component={NotFound} />
	</Switch>
)

export default Routers;