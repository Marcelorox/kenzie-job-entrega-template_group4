import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/adminContext";
import { StyledContainerAdminCandidateList } from "./style";

export const AdminPageCandidateList = () => {

    const { candidateList, candidates } = useContext(AdminContext)


    useEffect(() => {
        const companyID = localStorage.getItem("@ADMINID")

        candidateList(Number(companyID))
    }, [])

    console.log(candidates)

    return (
        <>
            <StyledContainerAdminCandidateList>
                <h1>Minhas candidaturas</h1>
                <ul>
                    <li>
                        <div className="candidateNameDiv">
                        <h2>Jose da silva - Desenvolvedor FullStack Jr</h2>
                        <button>+</button>
                        </div>
                        <div className="descriptionCandidateDiv">
                        <h3 className="titleCandidatureDetails">Detalhes da candidatura:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum officia eum. Quasi molestias quia odio dignissimos ipsam ullam, error vero odit qui iusto est dolores at vitae, eum voluptatem?</p>
                        <p>E-mail: <span className="candidateEmail">josedasilva@mail.com</span></p>
                        </div>
                    </li>
                    <li>
                        <div className="candidateNameDiv">
                        <h2>Jose da silva - Desenvolvedor FullStack Jr</h2>
                        <button>+</button>
                        </div>
                        <div className="descriptionCandidateDiv">
                        <h3 className="titleCandidatureDetails">Detalhes da candidatura:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum officia eum. Quasi molestias quia odio dignissimos ipsam ullam, error vero odit qui iusto est dolores at vitae, eum voluptatem?</p>
                        <p>E-mail: <span className="candidateEmail">josedasilva@mail.com</span></p>
                        </div>
                    </li>
                    <li>
                        <div className="candidateNameDiv">
                        <h2>Jose da silva - Desenvolvedor FullStack Jr</h2>
                        <button>+</button>
                        </div>
                        <div className="descriptionCandidateDiv">
                        <h3 className="titleCandidatureDetails">Detalhes da candidatura:</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum officia eum. Quasi molestias quia odio dignissimos ipsam ullam, error vero odit qui iusto est dolores at vitae, eum voluptatem?</p>
                        <p>E-mail: <span className="candidateEmail">josedasilva@mail.com</span></p>
                        </div>
                    </li>
                </ul>
            </StyledContainerAdminCandidateList>
        </>
    )
}