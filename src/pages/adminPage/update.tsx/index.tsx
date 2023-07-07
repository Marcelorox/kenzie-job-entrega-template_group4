import { Footer } from "../../../components/Footer"
import { Link } from "react-router-dom";
import ReturnToVacancies from "../../../assets/img/Return.png"; 
import { HeaderPrivate } from "../../../components/Header/headerPrivate"
import { StyledParagraph } from "../../../style/typography";
import { StyleContainerUpdatePage, StyledAllUpdatePage } from "./style";
import { UpdateForm } from "../../../components/forms/update/UpdateJob";


export const UpdateJobs = () => {
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
                    <h1 className="vacancie_name"> 
                    Editando:
                    </h1>
                    <UpdateForm />
                </StyleContainerUpdatePage>
            </main>
            <Footer />
        </StyledAllUpdatePage>
    </>
    )
}