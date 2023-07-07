import { Outlet, Navigate } from "react-router";

export function ProtectedRoutes (){
    const localData : string | null = localStorage.getItem('@TOKEN')
    

    return localData ? <Outlet/> : <Navigate to="/"/>
}