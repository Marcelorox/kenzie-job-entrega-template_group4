// import SearchIcon from "@mui/icons-material/Search";
// import { StyledHeader } from "./style.ts";
// import { StyledMenu } from "../../style/typography";
// import img from "../../assets/img/jobs.svg"

// export function Header() {
//   return (
//     <StyledHeader>
//       <div className="header_containner">
//         <img src={img} alt="imagem logo"/>
//         <div className="span_containner">
//           <StyledMenu>acesso empresa</StyledMenu>
//         </div>
//         <button className="headerButton">Confira nossas vagas</button>
//         <SearchIcon className="lupa" />
//       </div>
//     </StyledHeader>
//   );
// }

import { StyledMenu } from "../../style/typography";
import img from "../../assets/img/jobs.svg"
import lupa from "../../assets/img/lupa (2).svg"
import { StyledHeader } from "./style";

export function Header() {
  return (
    <StyledHeader>
      <div className="header_containner">
        <img src={img} alt="imagem logo"/>
        <img src={img} className="jobs"alt="imagem logo"/>
        <div className="span_containner">
          <StyledMenu>acesso empresa</StyledMenu>
        </div>
        <button className="headerButton">Confira nossas vagas</button>
        <img src={lupa} className="lupa" alt="imagem lupa"/>
      </div>
    </StyledHeader>
  )
}