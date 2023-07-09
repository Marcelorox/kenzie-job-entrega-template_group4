import { HeaderPrivate } from "../../components/Header/headerPrivate";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/inputs/Inputs";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import seta from "../../assets/img/seta.svg";
import textoCriarVagas from "../../assets/img/textoCriarVaga.svg";
import criar from "../../assets/img/criar.svg";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import { Styledsection } from "./style";
import { Link } from "react-router-dom";
import { StyledParagraph} from "../../style/typography";
import { StyleAlertSchema } from "../../components/inputs/StyleAlertSchema";
import { TNewVacanciesZod, newVacanciesZod } from "./NewVacanciesSchema";

export const AdminNewVacanciesPage = () => {
  const { addJobs } = useContext(AdminContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TNewVacanciesZod>({
    resolver: zodResolver(newVacanciesZod),
  });

  const adminId: number = parseInt(
    window.localStorage.getItem("@ADMINID") || "0"
  );
  const adminIdNumber = adminId;

  const candidateSubmit: SubmitHandler<TNewVacanciesZod> = async (data) => {
    const cadastro = { ...data, userId: adminIdNumber };
    addJobs(cadastro);
    
    reset();
  };

  return (
    <>
      <HeaderPrivate />
      <Styledsection>
        <div className="voltarContainner">
          <div className="voltar">
            <Link to={"/dashboard"}>
              <img className="imgSeta" src={seta} alt="seta voltar" />
            <StyledParagraph>voltar</StyledParagraph>
            </Link>
          </div>
        </div>
        <div className="sectionContainner">
          <section className="formSaction">
            <h1>Criar vaga</h1>
            <form onSubmit={handleSubmit(candidateSubmit)}>
              <Input 
                className="inputCriarVaga"
                type="text"
                placeholder="Cargo"
                error={errors.position}
                {...register("position")}
              />
              <Input
                className="inputCriarVaga"
                type="text"
                placeholder="Salário (opcional)"
                error={errors.sallary}
                {...register("sallary")}
              />
              <textarea                
               className="inputCriarVagaDescrição"
               placeholder="Descrição"
                {...register("description")}>
                </textarea>
                <StyleAlertSchema>{errors.description?.message}</StyleAlertSchema>
              <button type="submit" className="buttonCriaVaga">
                <img src={criar} alt="criar vaga" />
                <img src={textoCriarVagas} alt=" texto criar vaga" />
              </button>
            </form>
          </section>
        </div>
      </Styledsection>
      <Footer />
    </>
  );
};
