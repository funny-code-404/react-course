import { Switch, Route } from 'react-router-dom'
import { Home, Hotel, NotFound, LogIn, SignUp } from '../../pages'
import { AuthProvider } from '../context/Auth.context'
import PrivateRoute from '../PrivateRoute'

const Routes = () => (
    <AuthProvider>
        <Switch>
            <Route
                exact path='/login'
                component={LogIn}
            />
            <Route
                exact path='/signup'
                component={SignUp}
            />
            <PrivateRoute
                exact path='/'
                component={Home}
            />
            <PrivateRoute
                exact path='/:id'
                component={Hotel}
            />
            <PrivateRoute
                component={NotFound}
            />
        </Switch >
    </AuthProvider>
)
export default Routes