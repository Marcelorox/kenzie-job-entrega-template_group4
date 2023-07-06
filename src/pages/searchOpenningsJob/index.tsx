import React, { useContext, useState } from "react";
import { StyledButton, StyledSection } from "./style.ts";
import { Footer } from "../../components/Footer/index.tsx";
import { Header } from "../../components/Header/index.tsx";
import { Input } from "../../components/inputs/Inputs";
import searchImg from "../../assets/img/searchIMG.png";
import { UserContext } from "../../context/candidateContext.tsx";
import { SearchedListOpeningJobs } from "../../components/openingJobs/searchedListOpeningJobs/index.tsx";

export interface IFilteredJobs {
  description: string;
  id: number;
  position: string;
  userId: number;
}

/*interface InputProps {
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}*/

export const SearchJobOpennings = () => {
  const { jobs } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<IFilteredJobs[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const searchedJobs = jobs.filter((e) => e.position.includes(inputValue));
    setFilteredJobs(searchedJobs);
    setInputValue("");
  };

  return (
    <>
      <Header />
      <StyledSection>
        <h1>Busca de vagas</h1>
        <form onSubmit={handleSubmit}>
          <div className="divInput">
            <Input
              type="text"
              label="Digite o que você está procurando:"
              placeholder="Pesquisar"
              value={inputValue}
              onChange={handleInputChange}
              error="Este campo é obrigatório"
            />
            <StyledButton type="submit">
              <img src={searchImg} alt="lupa de pesquisa" />
            </StyledButton>
          </div>
        </form>
        <section>
          <ul><SearchedListOpeningJobs filteredJobs={filteredJobs} /></ul>
        </section>
      </StyledSection>
      <Footer />
    </>
  );
};