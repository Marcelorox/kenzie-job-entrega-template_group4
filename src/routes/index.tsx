import { Route, Routes } from "react-router";
import { HomePage } from "../pages/homePage";
import { PublicRoutes } from "./publicRoutes";
import { RegisterPage } from "../pages/registerPage";
import { LoginPage } from "../pages/loginPage";
import { SearchJobOpennings } from "../pages/searchOpenningsJob";
import { ProtectedRoutes } from "./privateRoutes";
import { AdminPage } from "../pages/adminPage";
import { AdminNewVacanciesPage } from "../pages/adminNewVacanciesPage";
import { UpdateJobs } from "../pages/adminPage/update.tsx";

//import { AdminContext } from "../context/adminContext"

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<HomePage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/entrar" element={<LoginPage />} />
        <Route path="/pesquisa" element={<SearchJobOpennings />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route
          index
          element={
              <AdminPage />
          }
        />
        <Route  path="/dashboard/criarVaga" element={<AdminNewVacanciesPage/>}/>
        <Route  path="/dashboard/:name/:id" element={<UpdateJobs />}/>
      </Route>
    </Routes>
  );
};
