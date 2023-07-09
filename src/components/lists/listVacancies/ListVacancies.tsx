import { Link } from "react-router-dom";
import { StyledParagraph, StyledTitleOne } from "../../../style/typography";
import { StyleContainerVacancies } from "./StyleContainerVacancies";
import add from "../../../assets/img/add.png";
import { useContext } from "react";
import { AdminContext } from "../../../context/adminContext";
import { CardVacancy } from "./cardVacancy/CardVacancy";

export const ListVacancies = () => {
  const { specificJobs } = useContext(AdminContext);
  console.log(specificJobs, "specificJobs");

  return (
    <StyleContainerVacancies>
      <div className="add_vacancies">
        <StyledTitleOne>Minhas vagas</StyledTitleOne>
        <Link to="/dashboard/criarVaga">
          <img src={add} alt="Adiciona nova vaga" />
          <StyledParagraph>Criar vaga</StyledParagraph>
        </Link>
      </div>
      <div>
        <ul>
            {
                specificJobs.map((vacancy) => {                    
                    return <CardVacancy key={vacancy.id} vacancy={vacancy} />})
            }
        </ul>
      </div>
    </StyleContainerVacancies>
  );
};