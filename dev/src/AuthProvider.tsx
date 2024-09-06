import React, { createContext, useContext, useState, useEffect } from 'react';

// Auth context creation
const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setUser({ token });
        }
    }, []);

    const login = (token: string) => {
        localStorage.setItem('accessToken', token);
        setUser({ token });
    };

    const logout = () => {
        // LocalStorage'dan token'i sil ve kullanıcıyı null yap
        localStorage.removeItem('accessToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);