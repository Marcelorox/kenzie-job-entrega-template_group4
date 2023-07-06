
import { GlobalStyle } from "./style/GlobalStyle";
// import { FormRegister } from "./components/forms/register/FormRegister"
import { SearchJobOpennings } from "./pages/searchOpenningsJob";
import { LoginPage } from "./pages/loginPage";
import { HomePage } from "./pages/homePage";
import { RoutesMain } from "./routes";


function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesMain />
    </>
  )
}
export default App;
