import { createContext } from "react";
import { TStorage } from "../../types/types";

type TAuthContext = {
    value: {
        isAuth: boolean,
    },
    setItem: (item: TStorage) => void,
};

const authContextInitial: TAuthContext = {
    value: {
        isAuth: true,
    },
    setItem: () => {},
};

export const AuthContext = createContext(authContextInitial);