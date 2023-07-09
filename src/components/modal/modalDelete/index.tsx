import { useContext } from "react";
import { StyledTitleThree } from "../../../style/typography"
import { Button } from "../../button/Button"
import { StyleModalDeleteContainer } from "./StyleModalDeleteConatier"
import { AdminContext } from "../../../context/adminContext";

interface IModalProps {
    setModalOpen: (isOpen: boolean) => void;
    id: number
  }
  

export const ModalDelete = ({ setModalOpen, id }: IModalProps) =>{
const { deleteJobs } = useContext(AdminContext)

    return(
        <StyleModalDeleteContainer>
            <div role="dialog" className="modal">
                <StyledTitleThree> Tem certeza que deseja excluir?</StyledTitleThree>
                <div className="buttons">
                    <Button id="delete" text="Deletar" onClick={() => deleteJobs(id)}/>
                    <Button onClick={() => setModalOpen(false)} text="Cancelar"/>
                </div>
            </div>
        </StyleModalDeleteContainer>
    )
}