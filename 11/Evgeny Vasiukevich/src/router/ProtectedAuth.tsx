import { Navigate } from 'react-router-dom';

type Props = {
    children: JSX.Element
    isAuth: boolean
}

const ProtectedAuth = ({ children, isAuth }: Props) => {
    if (isAuth) {
        return <Navigate to='/signin' replace/>
    }

    return children;
};

export default ProtectedAuth;