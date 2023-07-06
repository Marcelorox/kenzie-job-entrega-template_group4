import { Link } from "react-router-dom"
import { StyledParagraph, StyledTitleOne, StyledTitleTwo } from "../../../style/typography"
import { StyleContainerVacancies } from "./StyleContainerVacancies"
import add from "../../../assets/img/add.png";
import { useContext } from "react";
import { AdminContext } from "../../../context/adminContext";

export const ListVacancies= () =>{
    const  { specificJobs } = useContext(AdminContext)
    console.log(specificJobs, "specificJobs");
    

return(
    <StyleContainerVacancies>
        <div>
            <StyledTitleOne>Minhas vagas</StyledTitleOne>
            <Link to={"alguma pagina"}>
                <img src={add} alt="Adiciona nova vaga" />
                <StyledParagraph>Criar vaga</StyledParagraph>
            </Link>
        </div>
        <div>
            <ul>
            {
                specificJobs.map( vacancy => vacancy.length === 0? <StyledTitleTwo>Não há vagas cadastradas</StyledTitleTwo> :null )
            }
            </ul>
        </div>
    </StyleContainerVacancies>
        
)
}