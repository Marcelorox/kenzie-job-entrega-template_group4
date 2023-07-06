
import { StyledMenu } from "../../style/typography";
import img from "../../assets/img/jobs.svg"
import lupa from "../../assets/img/lupa.svg"
import { StyledHeader } from "./style";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <StyledHeader>
      <div className="header_containner">
        <img src={img} className="jobs"alt="imagem logo"/>
        <Link to={"/entrar"} className="span_containner">
          <StyledMenu>acesso empresa</StyledMenu>
        </Link>
        <button className="headerButton">Confira nossas vagas</button>
        <Link to={"/pesquisa"}>
          <img src={lupa} className="lupa" alt="imagem lupa"/>
        </Link>
      </div>
    </StyledHeader>
  );
}
