import { Switch, Route } from 'react-router-dom';
import { Home, Civilizations, Units, Structures, Technologies, Item, NotFound, LogIn, SignUp } from '../../pages';
import { connect } from 'react-redux';
import PrivateRoute from '../PrivateRoute'
import { useEffect, useState } from 'react';

export const Routes = ({ email }) => {

    const auth = Boolean(email)
    return (

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
                authenticated={auth}
            />
            <PrivateRoute
                exact path='/civilizations'
                component={Civilizations}
                authenticated={auth}
            />
            <PrivateRoute
                exact path='/units'
                exact component={Units}
                authenticated={auth}
            />
            <PrivateRoute
                exact path='/structures'
                exact component={Structures}
                authenticated={auth}
            />
            <PrivateRoute
                exact path='/technologies'
                exact component={Technologies}
                authenticated={auth}
            />
            <PrivateRoute
                exact path='/civilizations/:id'
                component={Item}
                authenticated={auth}
            />
            <PrivateRoute
                exact path='/units/:id'
                component={Item}
                authenticated={auth}
            />
            <PrivateRoute
                exact path='/structures/:id'
                component={Item}
                authenticated={auth}
            />
            <PrivateRoute
                exact path='/technologies/:id'
                component={Item}
                authenticated={auth}
            />
            <Route
                component={NotFound}
            />
        </Switch >
    );
}
const mapStateToProps = state => {
    return {
        email: state.firebase.auth.email
    };
};
// export default Routes;
export default connect(mapStateToProps)(Routes);