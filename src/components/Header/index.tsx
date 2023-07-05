
import { StyledMenu } from "../../style/typography";
import img from "../../assets/img/jobs.svg"
import lupa from "../../assets/img/lupa.svg"
import { StyledHeader } from "./style";


export function Header() {
  return (
    <StyledHeader>
      <div className="header_containner">
        <img src={img} className="jobs"alt="imagem logo"/>
        <div className="span_containner">
          <StyledMenu>acesso empresa</StyledMenu>
        </div>
        <button className="headerButton">Confira nossas vagas</button>
        <img src={lupa} className="lupa" alt="imagem lupa"/>
      </div>
    </StyledHeader>
  );
}
