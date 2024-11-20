import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import api from "../services/api";
import decodeUser from "../services/decodeToken";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (credentials) => {

        try {
            const { email, password } = credentials;

            const response = await api.post("/login", {
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const user = decodeUser(response.data.token);

            const authUser = {
                userID: user,
                token: response.data.token
            }

            localStorage.setItem('user', JSON.stringify(authUser));
            setUser(authUser);

            alert('login efetuado com sucesso');
        
        } catch (error) {

            if (axios.isAxiosError(error)) {
                if (error.response) {
                    console.error("Erro de resposta: ", error.response.data);
                    alert(error.response.data.message || "Ocorreu um erro na Requisição");
                } else if (error.request) {
                    console.error("Erro na requisição: ", error.request);
                    alert("Sem resposta do servidor. Tente novamente mais tarde");
                } else {
                    console.error("Erro desconhecido: ", error.message);
                    alert("Erro desconhecido: " + error.message);
                }
            } else {
                console.error("Erro inesperado: ", error);
                alert("Erro inesperado. Por favor, tente novamente mais tarde");
            }

        } finally {

        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
