
import { StyledParagraph } from "../../style/typography";
import img from "../../assets/img/jobs.svg"
import { StyledFooter } from "./style";

export function Footer() {
  return (
    <StyledFooter>
      <div className="footer_containner">
      <img src={img} alt="imagem logo"/>
        <StyledParagraph>
          Todos os direitos reservados - Kenzie Academy Brasil
        </StyledParagraph>
      </div>
    </StyledFooter>
  );
}
