import { createContext, useContext, useEffect } from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';

const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
    const initData = JSON.parse(localStorage.getItem('user')) || {
        isAuthenticated: false,
        token: null,
        tokenLife: null,
        expire: null,
        refreshToken: null,
    };
    const [user, setUser] = useStateWithCallbackLazy(initData);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;