import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FormRegister } from "../../components/forms/register/FormRegister";
import { StyledParagraph, StyledTitleOne } from "../../style/typography";
import { StyleContainerForm } from "./style";

export const RegisterPage = () => {
  return (
    <>
      <Header />
      <main>
        <StyleContainerForm>
          <div className="link_register">
            <StyledParagraph>Voltar</StyledParagraph>
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
