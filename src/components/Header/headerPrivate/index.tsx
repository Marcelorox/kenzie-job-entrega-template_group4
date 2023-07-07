import logo from "../../../assets/img/jobs.svg";
import { AdminContext } from "../../../context/adminContext";
import { StyleContainerHeaderPrivate } from "./style";
import { useContext } from "react";

export const HeaderPrivate = () => {
  const { handleLogout } = useContext(AdminContext);

const companyName = window.localStorage.getItem("@ADMINNAME")
const companyNameSlice = companyName?.slice(0,2)
const companyNameUpper = companyNameSlice?.toUpperCase()

 
  return (
    <header>
      <StyleContainerHeaderPrivate>
        <img src={logo} alt="Logo Jobs" />
        <div className="container_nav">
          <div className="logo_name">
            <button className="pieceNameCompany">{companyNameUpper}</button>
          </div>
          <button className="logout" onClick={() => handleLogout()}>sair</button>
        </div>
      </StyleContainerHeaderPrivate>
    </header>
  );
};
