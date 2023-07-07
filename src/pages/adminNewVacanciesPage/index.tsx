import { HeaderPrivate } from "../../components/Header/headerPrivate";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/inputs/Inputs";
import { TNewVacanciesZod, newVacanciesZod } from "./newVacanciesZod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import seta from "../../assets/img/seta.svg";
import criar from "../../assets/img/criar.svg";
import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";

export const AdminNewVacanciesPage = () => {

    const {addJobs} = useContext(AdminContext);
    
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TNewVacanciesZod>({
    resolver: zodResolver(newVacanciesZod),
  });

  const candidateSubmit: SubmitHandler<TNewVacanciesZod> = async (data) => {
    addJobs(data)
    reset();
  };

  return (
    <>
      <HeaderPrivate />
      <main>
        <div>
          <img src={seta} alt="seta voltar" />
          <p>voltar</p>
        </div>
        <section>
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
            <button type="submit">
              <img src={criar} alt="criar vaga" /> Criar vaga
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};
