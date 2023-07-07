import styled from "styled-components";

export const Styledsection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .homeJobs_caixa {
    height: 180px;
    background: #8490ff;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;
  }

  .homeJobs_fraseInicial {
    width: 100%;
    max-width: 1328px;
    h1{
      font-size: 2.9rem;
    }
  }

  h1 {
    font-family: var(--Font-primary);
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 4.875rem;
    color: white;
  }

  .homeJobs_aboutUs {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;
    margin-bottom: 1rem;
   
  }

  .homeJobs_aboutUsConatainner {
    width: 100%;
    max-width: 1328px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      color: #8490ff;
      margin-bottom: 1rem;
      font-size: 2.6rem;
    }
  }

  .homeJobs_aboutUsTitle {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .homeJobs_listaDeVagas {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;;
    justify-content: center;
    align-items: center;

    h1 {
      color: #8490ff;
      margin-bottom: 1rem;
    }
  }

  .homeJobs_listaDeVagas--Containner {
    width: 100%;
    max-width:1104px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  

    h1 {
      color: #8490ff;
      align-self: center;
      margin-bottom: 1.5rem;
    }
  }

  img {
    width: 100%;
    max-width: 600px;
    margin-top: 1rem;
  }

  @media (min-width: 700px) {
    h1 {
      font-size: 4rem;
      line-height: 4.875rem;
    }
    .homeJobs_fraseInicial, .homeJobs_aboutUsConatainner, .homeJobs_listaDeVagas--Containner{
      width: 80%;
    }
    .homeJobs_aboutUsConatainner {
      flex-direction: row;
      justify-content: space-between;
    }
    img{
      margin-top: 0;
    }
  }
`;
