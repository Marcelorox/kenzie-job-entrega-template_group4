import { useContext } from "react";
import { UserContext } from "../../../context/candidateContext";
import { OpeningJobsCard } from "../openingJobsCard";
import { StyledUl } from "./style";

export const OpeningJobsList = () => {
const{jobs} = useContext(UserContext)

if (!jobs.length) {
    return(
    <p>Não ha vagas disponíveis no momento</p>
    )
}
  return (
    <>
      <section>
        <StyledUl>
          {jobs.map((job) => (
            < OpeningJobsCard 
              key={job.id}
              position={job.position}
              description={job.description} 
              jobApplyID={job.id} 
              user={job.user} 
            /> )
          )}
        </StyledUl>
      </section>
    </>
  );
};
