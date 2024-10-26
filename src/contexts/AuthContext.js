// src/contexts/AuthContext.js
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (credentials) => {
        const fakeUser = { name: "Bruno", token: "token" };
        setUser(fakeUser);
        localStorage.setItem("user", JSON.stringify(fakeUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user"); // Remove o usuário do localStorage
    };

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser)); // Recupera o usuário do localStorage
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
