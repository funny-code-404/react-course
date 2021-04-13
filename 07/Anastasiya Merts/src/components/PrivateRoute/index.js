import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
    const isLogin = location.pathname.includes('/login');
    const isSignUp = location.pathname.includes('/signup');
    const isDelete = location.pathname.includes('/delete');
    
   return(
       <Route
       {...rest}
       render={(props) =>
        isLogin ? <Component {...props} isLogin /> : isSignUp ? <Component {...props} isSignUp /> : isDelete ? <Component {...props} isDelete /> : <Redirect to='/' />
    }
    />
   )
}

export default PrivateRoute;