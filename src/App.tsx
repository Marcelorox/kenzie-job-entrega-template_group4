<<<<<<< HEAD
import { GlobalStyle } from "./style/GlobalStyle";
// import { FormRegister } from "./components/forms/register/FormRegister"
import { SearchJobOpennings } from "./pages/searchOpenningsJob";
=======
import { LoginPage } from "./pages/loginPage";
import { GlobalStyle } from "./style/GlobalStyle";
// import { RegisterPage } from "./pages/registerPage";
import { HomePage } from "./pages/homePage";
//import { RegisterPage } from "./pages/registerPage";
//import { HomePage } from "./pages/homePage";
>>>>>>> ab1ed985531ead266362509d2c872fed5af3ff56

function App() {
  return (
    <>
      <GlobalStyle />
<<<<<<< HEAD
      <SearchJobOpennings /> 
      {/* <FormRegister />   */}
=======
      <HomePage /> 
      {/* <RegisterPage /> */}
      <LoginPage />
      {/*<HomePage /> */}
      {/*<RegisterPage />*/}
>>>>>>> ab1ed985531ead266362509d2c872fed5af3ff56
    </>
  )
}
export default App;
