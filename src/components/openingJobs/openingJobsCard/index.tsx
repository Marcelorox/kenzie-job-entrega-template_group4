import { StyledLi } from "./style";
import { useState } from "react";
import { StyledLabel, StyledTitleThree } from "../../../style/typography";
import add from "../../../assets/img/addIcons.svg";
import sub from "../../../assets/img/subIcons.svg";

interface IOpeningJobsCardProps {
  position: string;
  description: string;
}

export const OpeningJobsCard = ({
  position,
  description,
}: IOpeningJobsCardProps) => {
  // const putItemBuy = (productID) => {
  //   const itemExiste = itemBuyList.some((itemBuy) => itemBuy.id === productID);
  //   if (itemExiste) {
  //     toast.error("Não é possivel adicionar o mesmo item mais de uma vez ao carrinho");
  //   } else {
  //     setItemBuyList((itemBuyList) => [...itemBuyList, product]);
  //   }
  // };

  const [showJob, setShowJob] = useState(false);

  function handdleShowJob() {
    setShowJob(!showJob); 
    setShowJob(!showJob);
  }


  return (
    <StyledLi className="cardVaga">
      <div className="cardVaga_containner">
        <div className="cardVaga_header" onClick={() => handdleShowJob()}>
          <div className="cardVaga_header--containner"></div>
          {showJob ? (
              <img src={sub} className="subIcon" alt="sub icons" />
            ) : (
              <img src={add} className="addIcon" alt="add icons" />
            )}
            <div className="cardVaga_position">
              <StyledLabel>Kenzie Academy Brasil</StyledLabel>
              <StyledTitleThree>{position}</StyledTitleThree>
            </div>
            <button>Candidatar-se</button>
          </div>
          <div className={showJob ? "cardVaga_descripition" : "cardVaga_none"}>
          <p>{description}</p>
        </div>
      </div>

    </StyledLi>
  );
};
