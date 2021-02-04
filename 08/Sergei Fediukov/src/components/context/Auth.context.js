import { useState, useEffect, createContext } from 'react'
import { auth } from '../../firebase'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged((user) => setCurrentUser(user))
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}
