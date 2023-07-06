
import { GlobalStyle } from "./style/GlobalStyle";
// import { FormRegister } from "./components/forms/register/FormRegister"
import { SearchJobOpennings } from "./pages/searchOpenningsJob";
import { LoginPage } from "./pages/loginPage";


function App() {
  return (
    <>
      <GlobalStyle />
      <SearchJobOpennings /> 
      {/* <FormRegister />   */}

      <HomePage /> 
    </>
  )
}
export default App;
