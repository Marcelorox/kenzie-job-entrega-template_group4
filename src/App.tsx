import { GlobalStyle } from "./style/GlobalStyle";
// import { FormRegister } from "./components/forms/register/FormRegister"
import { SearchJobOpennings } from "./pages/searchOpenningsJob";

function App() {
  return (
    <>
      <GlobalStyle />
      <SearchJobOpennings /> 
      {/* <FormRegister />   */}
    </>
  )
}

export default App;
