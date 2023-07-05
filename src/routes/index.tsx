import { Route, Routes } from "react-router"
import { HomePage } from "../pages/homePage"
import { PublicRoutes } from "./publicRoutes"
import { RegisterPage } from "../pages/registerPage"
// import { ProtectedRoutes } from "./privateRoutes"
// import { AdminContext } from "../context/adminContext"


export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path="/" element={<PublicRoutes/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Route>
            
            {/* <Route path="/dashboard" element={<ProtectedRoutes/>}>
                <Route index element={<AdminContext></AdminContext>}/>
                <Route element={}/>
            </Route> */}
        </Routes>
    )
}