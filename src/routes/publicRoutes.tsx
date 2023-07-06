import { useContext } from "react";
import { Outlet, Navigate } from "react-router";
import { UserContext } from "../context/candidateContext";

export function PublicRoutes (){
    const {  } = useContext(UserContext)


    return !user ? <Outlet/> : <Navigate to="/"/>
}
