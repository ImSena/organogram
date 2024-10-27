import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (credentials) => {

        try{
            const {email, password} = credentials;

            const response = await axios.post("http://localhost:3001/api/login", {
                email,
                password
            }, {headers:{
                'Content-Type': 'application/json'
            }});

            console.log(response);
        }catch(error){
            console.log(error);
        }





        // const fakeUser = { name: "Bruno", token: "token" };
        // setUser(fakeUser);
        // localStorage.setItem("user", JSON.stringify(fakeUser));
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
