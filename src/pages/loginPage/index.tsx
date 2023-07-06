import { Header } from "../../components/Header"
import { StyleContainerForm } from "../registerPage/style"
import banner from "../../assets/img/BannerLogin.png";
import { FormLogin } from "../../components/forms/login/FormLogin";

export const LoginPage = () =>{
    return(
        <>
            <Header />
            <main>
                <StyleContainerForm />
                <div className="container_banner">
                    <img src={banner} alt="Banner" />
                </div>
                <div className="container_login">
                    <FormLogin />
                    <p>Nâo possui cadastro? <span>Cadastrar-se</span></p>
                </div>
           </main>
        </>
    )

}