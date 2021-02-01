import { Switch, Route } from 'react-router-dom'
import { Home, Civilizations, Units, Structures, Technologies, Item, NotFound } from '../../pages'

const Routes = () => (

    <Switch>
        <Route
            exact path='/'
            component={Home}
        />
        <Route
            exact path='/civilizations'
            component={Civilizations}
        />
        <Route
            exact path='/units'
            exact component={Units}
        />
        <Route
            exact path='/structures'
            exact component={Structures}
        />
        <Route
            exact path='/technologies'
            exact component={Technologies}
        />
        <Route
            exact path='/civilizations/:id'
            component={Item}
        />
        <Route
            exact path='/units/:id'
            component={Item}
        />
        <Route
            exact path='/structures/:id'
            component={Item}
        />
        <Route
            exact path='/technologies/:id'
            component={Item}
        />
        <Route
            component={NotFound}
        />
    </Switch >
)
export default Routes