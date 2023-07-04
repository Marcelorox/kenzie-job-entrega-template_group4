import SearchIcon from "@mui/icons-material/Search";
import { StyledHeader } from "./style";
import { StyledMenu } from "../../style/typography";

export function Header() {
  return (
    <StyledHeader>
      <div className="header_containner">
        <h4>Jobs</h4>
        <div className="span_containner">
          <StyledMenu>acesso empresa</StyledMenu>
        </div>
        <button className="headerButton">Confira nossas vagas</button>
        <SearchIcon className="lupa" />
      </div>
    </StyledHeader>
  );
}
