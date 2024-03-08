"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(() => {
        const storedAuthData = localStorage.getItem('authData');
        return storedAuthData ? JSON.parse(storedAuthData) : { token: null, user: null };
    });

    useEffect(() => {
        localStorage.setItem('authData', JSON.stringify(authData));
    }, [authData]);

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
