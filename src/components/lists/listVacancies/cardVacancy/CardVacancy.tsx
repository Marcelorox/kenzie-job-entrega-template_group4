import { StyledTitleThree } from "../../../../style/typography";
import { StyleCardVacancy } from "./StyleCardVacancy";
import edit from "../../../../assets/img/Edit.png";
import remove from "../../../../assets/img/Delete.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModalDelete } from "../../../modal/modalDelete";
import { AdminContext, IAdminJobResponse } from "../../../../context/adminContext";

export const CardVacancy = ({ vacancy }: IAdminJobResponse) => {
 const { modalOpen,  setModalOpen } = useContext(AdminContext)
  return (
    <StyleCardVacancy>
       {modalOpen? <ModalDelete id={vacancy.id} setModalOpen={setModalOpen}/> : null}
      <div className="card__container">
        <StyledTitleThree>{vacancy.position}</StyledTitleThree>
        <div>
          <Link to={`/dashboard/${vacancy.position}/${vacancy.id}`}>
            <img src={edit} alt={"Edita vaga"} />
          </Link>
          <div className="container_delete" onClick={() => setModalOpen(true) } >
             <img   src={remove} alt={"Exclui vaga"} />
          </div>
        </div>
      </div>
    </StyleCardVacancy>
  );
};
