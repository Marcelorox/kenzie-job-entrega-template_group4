import { useContext } from "react";
import { HeaderPrivate } from "../../components/Header/headerPrivate";
import { UserContext } from "../../context/candidateContext";
import { StyleContainerAdminPage } from "./style";
import { StyledParagraph, StyledTitleOne } from "../../style/typography";
import { useState } from "react";
import { ListVacancies } from "../../components/lists/listVacancies/ListVacancies";

export const AdminPage = () => {
  const [optionRender, setOptionRender] = useState("");
  const [nameCompany, setNameCompany] = useState(true);
  const name = localStorage.getItem("@ADMINNAME")

   const updateData = (option: string) =>{
        setOptionRender(option)
        setNameCompany(false)
   }
  return (
    <>
      <HeaderPrivate />
      <main>
        <StyleContainerAdminPage>
          {nameCompany ? (
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
            ) : (
              <p>Candidaturas</p>
            )}
          </section>
        </StyleContainerAdminPage>
      </main>
    </>
  );
};
