import { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { UserContext } from "../context/candidateContext";

export function ProtectedRoutes (){
    const { admin } = useContext(UserContext)
    

    return admin ? <Outlet/> : <Navigate to="/"/>
}