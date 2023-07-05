import { StyledLi } from "./style";
import { useState } from "react";
import { StyledLabel, StyledParagraph, StyledTitleThree } from "../../../style/typography";
import add from "../../../assets/img/addIcons.svg";
import sub from "../../../assets/img/subIcons.svg";
import { UserContext } from "../../../context/candidateContext";
import { useContext} from "react";

interface IOpeningJobsCardProps {
  position: string;
  description: string;
}

export const OpeningJobsCard = ({
  position,
  description,
}: IOpeningJobsCardProps) => {


  const [showJob, setShowJob] = useState(false);

  const{isOpen,setIsOpen} = useContext(UserContext)

  function handdleShowJob() {
    setShowJob(!showJob);
  } 

  return (
    <StyledLi className="cardVaga">
      <div className="cardVaga_containner">
        <div className="cardVaga_header" onClick={() => handdleShowJob()}>
          <div className="cardVaga_header--containner">
            {showJob ? (
              <img src={sub} className="subIcon" alt="sub icons" />
            ) : (
              <img src={add} className="addIcon" alt="add icons" />
            )}
            <div className="cardVaga_position">
              <StyledLabel>Kenzie Academy Brasil</StyledLabel>
              <StyledTitleThree>{position}</StyledTitleThree>
            </div>
            <button onClick={() => setIsOpen(true)}>Candidatar-se</button>
          </div>
        </div>

        <div className={showJob ? "cardVaga_descripition" : "cardVaga_none"}>
          <StyledParagraph>{description}</StyledParagraph>
        </div>
      </div>
    </StyledLi>
  );
};
