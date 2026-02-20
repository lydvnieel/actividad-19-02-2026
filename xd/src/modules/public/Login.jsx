import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(setSession){
    
    const navigate = useNavigate();
    const changeSession = () => {
        sessionStorage.setItem("token", "test.token.tiendita"); 
        navigate("/auth/home")
        setSession(true)
    }

    useEffect(() => {
        if(!!sessionStorage.getItem("token")){
            navigate("/auth/home")
        }
    }, [])
}