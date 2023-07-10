import { StyledLi } from "./style";
import { useState } from "react";
import { StyledLabel, StyledParagraph, StyledTitleThree } from "../../../style/typography";
import add from "../../../assets/img/addIcons.svg";
import sub from "../../../assets/img/subIcons.svg";
import { UserContext } from "../../../context/candidateContext";
import { useContext} from "react";

export interface IUsers {
  email: string;
  password: string;
  name: string;
  age: number;
  id: number;
}

interface IOpeningJobsCardProps {
  position: string;
  description: string;
  jobApplyID:number;
  user:IUsers
}

export const OpeningJobsCard = ({
  position,
  description,
  jobApplyID,
  user
}: IOpeningJobsCardProps) => {

  const [showJob, setShowJob] = useState(false);

  const{setIsOpen, setApplyJob} = useContext(UserContext)

 const handdleShowJob = () =>{
    setShowJob(!showJob);
  } 

const applyClickButton = () =>{
  setIsOpen(true)
  setApplyJob({"userId":user.id,"jobId": jobApplyID,"position":position, "empresa":user.name})
}

  return (
    <StyledLi className="cardPosition">
      <div className="cardPosition_containner">
        <div className="cardPosition_header" onClick={() => handdleShowJob()}>
          <div className="cardPosition_header--containner">
            {showJob ? (
              <img src={sub} className="subIcon" alt="sub icons" />
            ) : (
              <img src={add} className="addIcon" alt="add icons" />
            )}
            <div className="cardPosition_positionDetails">
              <StyledLabel>{user.name}</StyledLabel>
              <StyledTitleThree>{position}</StyledTitleThree>
            </div>
            <button className="buttonCard"onClick={() => applyClickButton()}>Candidatar-se</button>
          </div>
        </div>
        
        <div className={showJob ? "cardPosition_descripitionDetails" : "cardPosition_descripitionDetailsNone"}>
          <StyledParagraph>{description}</StyledParagraph>
        </div>
      </div>
    </StyledLi>
  );
};
