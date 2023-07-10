import { Footer } from "../../../components/Footer"
import { Link, useParams } from "react-router-dom";
import ReturnToVacancies from "../../../assets/img/Return.png"; 
import { HeaderPrivate } from "../../../components/Header/headerPrivate"
import { StyledParagraph, StyledTitleOne } from "../../../style/typography";
import { StyleContainerUpdatePage, StyledAllUpdatePage } from "./style";
import { UpdateForm } from "../../../components/forms/update/UpdateJob";


export const UpdateJobs = () => {
const { name } = useParams()
    
return(
    <>
        <StyledAllUpdatePage>
            <HeaderPrivate />
            <main className="main">
                <StyleContainerUpdatePage>
                <div>
                    <Link to={"/dashboard"} className="link_register">
                    <img src={ReturnToVacancies} alt="Voltar" />
                    <StyledParagraph className="return_button">Voltar</StyledParagraph>   
                    </Link>
                </div>
                    <StyledTitleOne className="vacancie_name"> 
                    Editando: {name}
                    </StyledTitleOne>
                    <UpdateForm />
                </StyleContainerUpdatePage>
            </main>
            <Footer />
        </StyledAllUpdatePage>
    </>
    )
}