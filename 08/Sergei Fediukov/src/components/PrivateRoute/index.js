import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../context/Auth.context'

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = useContext(AuthContext)
    console.log(AuthContext)
    return <Route
        {...rest}
        render={props => currentUser ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />}
    />
}
export default PrivateRoute