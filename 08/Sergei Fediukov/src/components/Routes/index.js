import { Switch, Route } from 'react-router-dom'
import { Home, Hotel, NotFound } from '../../pages'
const Routes = () => (

    <Switch>
        <Route
            exact path='/'
            component={Home}
        />
        <Route
            exact path='/:id'
            component={Hotel}
        />
        <Route
            component={NotFound}
        />
    </Switch >
)
export default Routes