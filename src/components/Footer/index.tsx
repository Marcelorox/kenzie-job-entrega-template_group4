import { StyledFooter } from "./style";
import { StyledParagraph } from "../../style/typography";

export function Footer() {
  return (
    <StyledFooter>
      <div className="footer_containner">
        <h4>Jobs</h4>
        <StyledParagraph>
          Todos os direitos reservados - Kenzie Academy Brasil
        </StyledParagraph>
      </div>
    </StyledFooter>
  );
}
