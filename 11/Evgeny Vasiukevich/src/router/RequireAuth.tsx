import { Navigate } from 'react-router-dom';

type Props = {
    children: JSX.Element
    isAuth: boolean
}

const RequireAuth = ({ children, isAuth }: Props) => {
    if (!isAuth) {
        return <Navigate to='/hotels' replace/>        
    }

    return children;
};

export default RequireAuth;