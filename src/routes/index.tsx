import { Route, Routes } from "react-router"
import { HomePage } from "../pages/homePage"
import { PublicRoutes } from "./publicRoutes"
import { RegisterPage } from "../pages/registerPage"
import { LoginPage } from "../pages/loginPage"
import { SearchJobOpennings } from "../pages/searchOpenningsJob"
// import { ProtectedRoutes } from "./privateRoutes"
// import { AdminContext } from "../context/adminContext"


export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path="/" element={<PublicRoutes/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/cadastro" element={<RegisterPage/>}/>
                <Route path="/entrar" element={<LoginPage/>}/>
                <Route path="/pesquisa" element={<SearchJobOpennings/>}/>
            </Route>
            
            {/* <Route path="/dashboard" element={<ProtectedRoutes/>}>
                <Route index element={<AdminContext></AdminContext>}/>
                <Route element={}/>
            </Route> */}
        </Routes>
    )
}