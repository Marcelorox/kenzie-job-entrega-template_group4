//import { useContext } from "react";
import { HeaderPrivate } from "../../components/Header/headerPrivate";
import { StyleContainerAdminPage } from "./style";
import { StyledParagraph, StyledTitleOne } from "../../style/typography";
import { useState } from "react";
import { ListVacancies } from "../../components/lists/listVacancies/ListVacancies";
import { AdminPageCandidateList } from "../adminPageCandidateList";

export const AdminPage = () => {
  const [optionRender, setOptionRender] = useState("");
  const [nameCompanyRender, setNameCompanyRender] = useState(true);
  const name = localStorage.getItem("@ADMINNAME")

   const updateData = (option: string) =>{
        setOptionRender(option)
        setNameCompanyRender(false)
   }
  return (
    <>
      <HeaderPrivate />
      <main>
        <StyleContainerAdminPage>
          {nameCompanyRender ? (
            <div className="info__company">
              <StyledTitleOne>{name}</StyledTitleOne>
              <StyledParagraph>
                Seja bem vindo {"(a)"}, selecione uma das opções abaixo:
              </StyledParagraph>
            </div>
          ) : null}
          <div className="buttons_admin">
            <button onClick={() => updateData("vacancies")}>
              Minhas vagas
            </button>
            <button
              value="application"
              onClick={() => updateData("application")}
            >
              Minhas candidaturas
            </button>
          </div>
          <section>
            {optionRender === "vacancies" ? (
              <ListVacancies />
            ) : (null) }
            {optionRender === "application"?(
              <AdminPageCandidateList/>
            ) : (null)}
          </section>
        </StyleContainerAdminPage>
      </main>
    </>
  );
};
