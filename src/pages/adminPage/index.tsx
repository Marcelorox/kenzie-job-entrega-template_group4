import { useContext } from "react";
import { HeaderPrivate } from "../../components/Header/headerPrivate";
import { UserContext } from "../../context/candidateContext";
import { StyleContainerAdminPage } from "./style";
import { StyledParagraph, StyledTitleOne } from "../../style/typography";
import { useState } from "react";
import { ListVacancies } from "../../components/lists/listVacancies/ListVacancies";

export const AdminPage = () => {
  const { admin } = useContext(UserContext);
  const [optionRender, setOptionRender] = useState("");

  return (
    <>
      <HeaderPrivate />
      <main>
        <StyleContainerAdminPage>
          <div className="info__company">
            <StyledTitleOne>{admin?.name}</StyledTitleOne>
            <StyledParagraph>
              Seja bem vindo {"(a)"}, selecione uma das opções abaixo:
            </StyledParagraph>
          </div>
          <div className="buttons_admin">
            <button onClick={() => setOptionRender("vacancies")}>
              Minhas vagas
            </button>
            <button value="application"onClick={() => setOptionRender("application")}>Minhas candidaturas</button>
          </div>
          <section>
            { optionRender ==="vacancies"? <ListVacancies />: <p>Candidaturas</p>}
          </section>
        </StyleContainerAdminPage>
      </main>
    </>
  );
};
