"use client"
import { createContext, useContext, useState, useEffect } from 'react';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({ token: null, user: null });

    useEffect(() => {
        const storedAuthData = localStorage.getItem('authData');
        if (storedAuthData) {
            setAuthData(JSON.parse(storedAuthData));
        }
    }, []); // empty dependency array ensures the effect runs only once after the initial render on the client side

    const updateAuthData = (newAuthData) => {
        setAuthData(newAuthData);
        localStorage.setItem('authData', JSON.stringify(newAuthData));
    };

    const logout = () => {
        setAuthData({ token: null, user: null });
        localStorage.removeItem('authData');

    };

    return (
        <AuthContext.Provider value={{ authData, updateAuthData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
