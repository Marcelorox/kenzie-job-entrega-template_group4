import SearchIcon from "@mui/icons-material/Search";
import { StyledHeader } from "./style";
import { StyledMenu } from "../../style/typography";

export function Header() {
  return (
    <StyledHeader>
      <div className="header_containner">
        <h1>Jobs</h1>
        <div className="span_containner">
          <StyledMenu>acesso empresa</StyledMenu>
        </div>
        <button>Confira nossas vagas</button>
        <SearchIcon className="lupa" />
      </div>
    </StyledHeader>
  );
}
