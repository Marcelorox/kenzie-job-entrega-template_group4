import logo from "../../../assets/img/jobs.svg";
import { AdminContext } from "../../../context/adminContext";
import { StyleContainerHeaderPrivate } from "./style";
import { useContext } from "react";
import KE from "../../../assets/img/KE.png";



export const HeaderPrivate = () =>{
    const { handleLogout } = useContext(AdminContext)
    console.log(handleLogout);
    

    return(
        <header>
            <StyleContainerHeaderPrivate>
                <img src={logo} alt="Logo Jobs" />
                <div className="container_nav">
                    <div className="logo_name">
                        <img src={KE} alt="Inicial da empresa" />
                    </div>
                    <button onClick={() =>handleLogout()}>sair</button>
                </div>
            </StyleContainerHeaderPrivate>
        </header>
    )
}