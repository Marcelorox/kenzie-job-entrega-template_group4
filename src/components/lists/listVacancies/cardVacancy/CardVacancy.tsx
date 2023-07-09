import { StyledTitleThree } from "../../../../style/typography";
import { StyleCardVacancy } from "./StyleCardVacancy";
import edit from "../../../../assets/img/Edit.png";
import remove from "../../../../assets/img/Delete.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ModalDelete } from "../../../modal/modalDelete";

export const CardVacancy = () => {
const [modalOpen, setModalOpen] = useState(false)
    
  return (
    <StyleCardVacancy>
       {modalOpen? <ModalDelete setModalOpen={setModalOpen}/> : null}
      <div className="card__container">
        <StyledTitleThree>Vaga da empresa</StyledTitleThree>
        <div>
          <Link to={`/dashboard/editar/${"id"}`}>
            <img src={edit} alt={`Edita vaga ${"nome"}`} />
          </Link>
          <div className="container_delete" onClick={() => setModalOpen(true) } >
             <img   src={remove} alt={`Exclui vaga ${"nome"}`} />
          </div>
        </div>
      </div>
    </StyleCardVacancy>
  );
};
