import { boolean } from "zod"
import { StyledTitleThree } from "../../../style/typography"
import { Button } from "../../button/Button"
import { StyleModalDeleteContainer } from "./StyleModalDeleteConatier"

interface IModalProps{
    setOpenModal: boolean
}

export const ModalDelete = ({ setModalOpen: IModalProps }) =>{
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