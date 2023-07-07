import { StyledTitleThree } from "../../../../style/typography";
import { StyleCardVacancy } from "./StyleCardVacancy";
import edit from "../../../../assets/img/Edit.png";
import remove from "../../../../assets/img/Delete.png";
import { Link } from "react-router-dom";

export const CardVacancy = () => {
  return (
    <StyleCardVacancy>
      <div className="card__container">
        <StyledTitleThree>Vaga da empresa</StyledTitleThree>
        <div>
          <Link to={"edit"}>
            <img src={edit} alt={`Edita vaga ${"nome"}`} />
          </Link>
          <Link to={"remove"}>
            <img src={remove} alt={`Exclui vaga ${"nome"}`} />
          </Link>
        </div>
      </div>
    </StyleCardVacancy>
  );
};
