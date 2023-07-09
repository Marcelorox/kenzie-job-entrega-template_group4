import { StyledTitleThree } from "../../../style/typography"
import { Button } from "../../button/Button"
import { StyleModalDeleteContainer } from "./StyleModalDeleteConatier"

interface IModalProps {
    setModalOpen: (isOpen: boolean) => void;
  }
  

export const ModalDelete = ({ setModalOpen }: IModalProps) =>{

    return(
        <StyleModalDeleteContainer>
            <div role="dialog" className="modal">
                <StyledTitleThree> Tem certeza que deseja excluir?</StyledTitleThree>
                <div className="buttons">
                    <Button id="delete" text="Deletar" />
                    <Button onClick={() => setModalOpen(false)} text="Cancelar"/>
                </div>
            </div>
        </StyleModalDeleteContainer>
    )
}