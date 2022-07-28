import React, { ReactElement } from 'react';
import { useStorage } from '../../hooks/useStorage';
import { AuthContext } from './AuthContext';

type Props = {
    children: ReactElement
};

const AuthContextProvider = ({ children }: Props) => {
    const initialValue = {
        isAuth: true,
    };
    const { value, setItem } = useStorage('auth', initialValue)

    return (
        <AuthContext.Provider value={{ value, setItem }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;