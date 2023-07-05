import { Header } from "../../components/Header"
import banner from "../../assets/img/BannerLogin.png";
import { FormLogin } from "../../components/forms/login/FormLogin";
import { StyleContainerLoginPage } from "./style";
import { StyledMenu, StyledParagraph, StyledTitleOne } from "../../style/typography";

export const LoginPage = () =>{
    return(
        <>
            <Header />
            <main>
                <StyleContainerLoginPage >
                <div className="container_banner">
                    <img src={banner} alt="Banner" />
                </div>
                <div className="container_login">
                <StyledTitleOne>Faça Login</StyledTitleOne>
                    <FormLogin />
                    <div className="createUser">
                      <StyledParagraph>Nâo possui cadastro? <StyledMenu>Cadastrar-se</StyledMenu></StyledParagraph>
                    </div>
                </div>
                </ StyleContainerLoginPage>
           </main>
        </>
    )

}