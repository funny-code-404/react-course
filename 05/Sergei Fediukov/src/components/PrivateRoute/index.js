
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

const PrivateRoute = ({ authenticated, ...ownProps }) => {
    const { component: Component, ...rest } = ownProps;
    return <Route {...rest} render={(props) => (authenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />)} />;
}
PrivateRoute.propTypes = {
    Component: PropTypes.func,
    rest: PropTypes.object
}
PrivateRoute.defaultProps = {
    rest: undefined,
    Component: undefined
}

export default PrivateRoute