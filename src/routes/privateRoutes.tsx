import { Outlet, Navigate } from "react-router";
import { AdminProvider } from "../context/adminContext";

export function ProtectedRoutes (){
    const localData : string | null = localStorage.getItem('@TOKEN')
    

    return localData ?  <AdminProvider><Outlet/></AdminProvider>: <Navigate to="/"/>
}