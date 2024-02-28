// authContext.js
"use client"
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({ token: null, user: null });

    const updateAuthData = (newAuthData) => {
        setAuthData(newAuthData);
    };

    const logout = () => {
        setAuthData({ token: null, user: null });
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
