import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/adminContext";
import { StyledContainerAdminCandidateList } from "./style";
import add from "../../assets/img/addIcons.svg";
import sub from "../../assets/img/subIcons.svg";
import { v4 as uuidv4 } from 'uuid';


export const AdminPageCandidateList = () => {

    const { candidateList, candidates, findJobsByCompanyId, specificJobs } = useContext(AdminContext)
    const [showJob, setShowJob] = useState(false);

    const handdleShowJob = () => {
        setShowJob(!showJob);
    }

    useEffect(() => {
        const companyID = localStorage.getItem("@ADMINID")

        candidateList(Number(companyID))
        findJobsByCompanyId(Number(companyID))
    }, [])

    const candidatureList = candidates.map((candidate) => {

        const job = specificJobs.find((job) => job.id === candidate.jobId);

        return {
            candidate,
            job
        };
    });

    const cryptoUUID = () => {
        return uuidv4();
    }

    console.log(candidatureList)

    return (
        <>
            <StyledContainerAdminCandidateList>
                <h1>Minhas candidaturas</h1>
                <ul>
                    {candidates ? candidatureList.map((e) => <li key={cryptoUUID()}>
                        <div className="candidateNameDiv" onClick={() => handdleShowJob()}>
                            <h2>{e.candidate?.name} - {e.job?.position}</h2>
                            <div>
                                {showJob ? (
                                    <img src={sub} className="subIcon" alt="sub icons" />
                                ) : (
                                    <img src={add} className="addIcon" alt="add icons" />
                                )}
                            </div>
                        </div>
                        <div className={showJob ? "descriptionCandidateDiv" : "descriptionCandidateDivNone"}>
                            <h3 className="titleCandidatureDetails">Detalhes da candidatura:</h3>
                            <p>{e.job?.description}</p>
                            <p>E-mail: <span className="candidateEmail">{e.candidate?.email}</span></p>
                        </div>
                    </li>) : <div><h1>Nenhum candidato foi cadastrado até o momento</h1></div>}
                </ul>
            </StyledContainerAdminCandidateList>
        </>
    )
}