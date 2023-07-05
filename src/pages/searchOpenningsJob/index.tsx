import { Footer } from "../../components/Footer/index.tsx";
import { Header } from "../../components/Header/index.tsx";
import { Input } from "../../components/inputs/Inputs";
import searchImg from "../../assets/img/searchIMG.png";
import { StyledSection } from "./style.ts";

export function SearchJobOpennings() {

    return (
        <>
            <Header />
            <StyledSection>
                <h1>Busca de vagas</h1>
                <form>
                    <div className="divInput">
                        <Input type="text" label="Digite o que você está procurando:" placeholder="Pesquisar" />
                        <button><img src={searchImg} alt="lupa de pesquisa" /></button>
                    </div>
                </form>
                {/*<h2>Resultados de busca para: <span>desenvolvedor</span></h2>
                 <div className="emptyList">
                    <h3 className="emptyListTitle">Desculpe :(!</h3>
                    <p className="emptyListText">Nenhun resultado encontrado</p>
                </div> */}
            </StyledSection>
            <Footer />
        </>
    );
}
