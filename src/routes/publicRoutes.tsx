import { Outlet, Navigate } from "react-router";

export function PublicRoutes (){
    const localData : string | null = localStorage.getItem('@TOKEN')
    return !localData ? <Outlet/> : <Navigate to="/dashboard"/>
}
