
import { GlobalStyle } from "./style/GlobalStyle";
import { RoutesMain } from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer position="top-right"
                                  autoClose={1000}
                                  hideProgressBar
                                  newestOnTop={false}
                                  closeOnClick
                                  rtl={false}
                                  pauseOnFocusLoss
                                  draggable
                                  pauseOnHover
                                  theme="light"/>
    </>
  )
}
export default App;
