import { StyledHeader } from "./style";
import { StyledMenu } from "../../style/typography";
import img from "../../assets/img/jobs.svg";
import { AiOutlineSearch } from 'react-icons/ai'

export function Header() {
  return (
    <StyledHeader>
      <div className="header_containner">
        <img src={img} alt="imagem logo"/>
        <div className="span_containner">
          <StyledMenu>acesso empresa</StyledMenu>
        </div>
        <button className="headerButton">Confira nossas vagas</button>
        <AiOutlineSearch size="21px" className="lupa" />
      </div>
    </StyledHeader>
  );
}
