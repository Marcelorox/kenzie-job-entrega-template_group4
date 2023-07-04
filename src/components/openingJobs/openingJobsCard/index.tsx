import { StyledLi } from "./style";

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

  return (
    <StyledLi  className="cardVaga">
      <div className="cardVaga_containner">
        <div className="cardVaga_header">
          <img></img>
          <div>
            <p>Kenzie Academy Brasil</p>
            <h2>{position}</h2>
          </div>
          <button>Candidatar-se</button>
        </div>
        <div className="cardVaga_descripition">
        <p>{description}</p>
        </div>
      </div>


    </StyledLi>
  );
};
