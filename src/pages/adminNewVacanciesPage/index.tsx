import { HeaderPrivate } from "../../components/Header/headerPrivate";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/inputs/Inputs";
import { TNewVacanciesZod, newVacanciesZod } from "./newVacanciesZod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import seta from "../../assets/img/seta.svg";
import textoCriarVagas from "../../assets/img/textoCriarVaga.svg";
import criar from "../../assets/img/criar.svg";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";
import { Styledsection } from "./style";
import { Link } from "react-router-dom";

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

  const candidateSubmit: SubmitHandler<TNewVacanciesZod> = async (data) => {
    addJobs(data);
    reset();
  };

  return (
    <>
      <HeaderPrivate />
      <Styledsection>
        <div className="sectionContainner">
          <div className="voltar">
            <Link to={"/dashboard"}>
              <img className="imgSeta" src={seta} alt="seta voltar" />
            </Link>
            <h5>voltar</h5>
          </div>
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
              <Input
                className="inputCriarVagaDescrição"
                type="text"
                placeholder="Descrição"
                error={errors.description}
                {...register("description")}
              />
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
