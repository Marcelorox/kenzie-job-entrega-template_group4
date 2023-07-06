import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FormRegister } from "../../components/forms/register/FormRegister";
import { StyledParagraph, StyledTitleOne } from "../../style/typography";
import { StyleContainerForm } from "./style";
import ReturnHome from "../../assets/img/Return.png";

export const RegisterPage = () => {
  return (
    <>
      <Header />
      <main>
        <StyleContainerForm>
          <div className="link_register">
            <Link to={"/"}>
              <img src={ReturnHome} alt="Voltar para Home Page" />
              <StyledParagraph className="return_button">
                Voltar
              </StyledParagraph>
            </Link>
          </div>
          <section>
            <div className="form_container">
              <div>
                <StyledTitleOne>Cadastre-se</StyledTitleOne>
                <FormRegister />
              </div>
            </div>
          </section>
        </StyleContainerForm>
      </main>
      <Footer />
    </>
  );
};
