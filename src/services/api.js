import axios from "axios";

const api = axios.create({
    baseURL: 'https://organo-backend-xapl.onrender.com/api'
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response?.status === 401){
            if(error.response.data.message === 'Token has expired'){
                localStorage.removeItem("user");

                alert('Sua sessão expirou. Faça o login novamente');
                window.location.href = '/login';
            }
        }

        return Promise.reject(error);
    }
);

export default api;