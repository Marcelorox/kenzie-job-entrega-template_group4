//import SearchIcon from "@mui/icons-material/Search";
import { StyledHeader } from "./style";
import { StyledMenu } from "../../style/typography";
import img from "../../assets/img/jobs.svg";
import SearchIcon from '@mui/icons-material/Search';


export function Header() {
  return (
    <StyledHeader>
      <div className="header_containner">
        <img src={img} alt="imagem logo"/>
        <div className="span_containner">
          <StyledMenu>acesso empresa</StyledMenu>
        </div>
        <button className="headerButton">Confira nossas vagas</button>
          <SearchIcon className="lupa" />
      </div>
    </StyledHeader>
  );
}
