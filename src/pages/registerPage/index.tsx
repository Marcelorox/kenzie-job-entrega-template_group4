import { Header } from "../../components/Header";
import { FormRegister } from "../../components/forms/register/FormRegister";
import { StyleContainerForm } from "./style";

export const RegisterPage = () => {
  return (
    <>
      <Header />
      <main>
        <StyleContainerForm>
          <div className="link_register">
            <p>Voltar</p>
          </div>
          <section>
            <div className="form_container">
              <div>
                <h1>Cadastra-se</h1>
                <FormRegister />
              </div>
            </div>
          </section>
        </StyleContainerForm>
      </main>
    </>
  );
};
