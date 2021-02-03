import { Switch, Route } from 'react-router-dom'
// import { Home, Civilizations, Units, Structures, Technologies, Item, NotFound } from '../../pages'
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