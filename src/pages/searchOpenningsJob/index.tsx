import React, { useContext, useState } from "react";
import { StyledButton, StyledMain } from "./style.ts";
import { Footer } from "../../components/Footer/index.tsx";
import { Header } from "../../components/Header/index.tsx";
import searchImg from "../../assets/img/searchIMG.png";
import { UserContext } from "../../context/candidateContext.tsx";
import { SearchedListOpeningJobs } from "../../components/openingJobs/searchedListOpeningJobs/index.tsx";

export interface IFilteredJobs {
  description: string;
  id: number;
  position: string;
  userId: number;
}

export const SearchJobOpennings = () => {
  const { jobs } = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<IFilteredJobs[]>([]);
  const [listOn, setListOn] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.trim());
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const searchedJobs = jobs.filter((e) => e.position.includes(inputValue));
    setListOn(true);
    setFilteredJobs(searchedJobs);
    setTimeout;
  };

  return (
    <>
      <Header />
      <StyledMain>
        <h1>Busca de vagas</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="inputSearchOpenningJob">Digite o que você está procurando:</label>
          <div className="divInput">
            <input
              type="text"
              id="inputSearchOpenningJob"
              placeholder="Pesquisar"
              value={inputValue}
              onChange={handleInputChange} />
            <StyledButton type="submit">
              <img src={searchImg} alt="lupa de pesquisa" />
            </StyledButton>
          </div>
        </form>
        <section>
          {filteredJobs.length > 0 ? (
            <>
              <h2>Resultados de busca para <span>{inputValue}</span></h2>
              <ul>
                <SearchedListOpeningJobs filteredJobs={filteredJobs} />
              </ul>
            </>
          ) : listOn && (
            <>
              <h2>Resultados de busca para <span>{inputValue}</span></h2>
              <div className="emptyList">
                <h3 className="emptyListTitle">Desculpe :(!</h3>
                <p className="emptyListText">Nenhum resultado encontrado</p>
              </div>
            </>
          )}
        </section>
      </StyledMain>
      <Footer />
    </>
  );
};