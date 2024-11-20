import { decodeToken } from "react-jwt";

const decodeUser = (token) =>{
    try{
        const decoded = decodeToken(token);
        return decoded.userId;
    }catch(error){
        console.error("Erro ao decodificar o token: ", error);
        return null;
    }
}

export default decodeUser;