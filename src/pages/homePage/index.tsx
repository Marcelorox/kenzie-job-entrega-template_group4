import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Styledsection } from "./style";
import equipe from "../../assets/img/equipe.svg";
import { StyledParagraph } from "../../style/typography";
import { OpeningJobsList } from "../../components/openingJobs/openingJobsList";
import { useContext, useRef } from "react";
import { UserContext } from "../../context/candidateContext";
import { Modal } from "../../components/modal/index.jsx";


 type MyFunctionType= () => void;

export const HomePage = () => {
  const { isOpen } = useContext(UserContext);

  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {isOpen ? <Modal /> : null}
      <Header />
      <Styledsection className="homeJobs_containner">
        <div className="homeJobs_caixa">
          <div className="homeJobs_fraseInicial">
            <h1>Trabalho é na jobs</h1>
          </div>
        </div>
        <div className="homeJobs_aboutUs">
          <div className="homeJobs_aboutUsConatainner">
            <div className="homeJobs_aboutUsTitle">
              <h1>Sobre a jobs</h1>
              <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                quis orci nec felis varius pretium. Nam eu diam erat. Sed libero
                ante, finibus id nunc suscipit, sagittis sagittis sem. Nam
                accumsan, turpis sed consequat tincidunt, nibh odio tincidunt
                nunc, aliquet sodales sem tortor sed lectus.
              </StyledParagraph>
            </div>
            <div className="homeJobs_aboutUsImg">
              <img src={equipe} alt="Equipe unida" />
            </div>
          </div>
        </div>
        <div className="homeJobs_listaDeVagas" ref={sectionRef}>
          <div className="homeJobs_listaDeVagas--Containner">
            <h1>Confira Nossas vagas</h1>
            <OpeningJobsList />
          </div>
        </div>
      </Styledsection>
      <Footer />
    </>
  );
}
