import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoutes from '../utils/ProtectedRoutes';
import Login from '../pages/Login';
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import { useAuth } from "../contexts/AuthContext";
import NotFound from "../pages/NotFound";


const AppRoutes = () => {

    const { user } = useAuth();
    console.log(user);
    return (
        <Router>
            <Routes>
                <Route path="/" element={user ? <Home /> : <Landing />} />

                <Route element={<ProtectedRoutes />} >
                    <Route path="/" element={ <Home />} />
                    <Route path="/cargo" element />
                    <Route path="/usuario" element />
                </Route>

                {
                    !user && (
                    <>
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastrar" element/>;
                    </>)
                }

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;