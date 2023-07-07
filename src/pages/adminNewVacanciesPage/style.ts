import styled from "styled-components";

export const Styledsection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;


.sectionContainner{
    width: 100%;
    max-width: 1328px;
    padding: 1rem;
}
.imgSeta{
width: 18px;
}
.voltar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:80px;
}
h5{
    font-family:var(--Font-primary);
    color:var(--blue);
}
  h1{
    font-family:var(--Font-primary);
    color:var(--blue);
    font-weight:700;
    font-size:44px;
    line-height: 78px;
    margin-bottom:2rem;
  }
  .formSaction{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
  }

  form{
    width: 100%;
    display: flex;
    flex-direction:column;
    max-width: 639px;
  }

  .inputCriarVaga{
    height: 66px;
    margin-bottom:1rem;
    padding:1rem;
    border: 1px solid var(--blue);
    border-radius:40px;
  }

  .inputCriarVagaDescrição{
    height: 236px;
    margin-bottom:1rem;
    padding:1rem;
    border: 1px solid var(--blue);
    border-radius:40px;
  }
  .buttonCriaVaga{
    width: 50%;
    align-self:flex-end;
    border: 1px solid var(--blue);
    border-radius:40px;
    background:var(--blue);
    height: 58px;
    color: white;
    font-family:var(--Font-primary);
    font-weight:700;
    font-size:17px;
    line-height: 21px;
    text-align: center;
  }
  @media (min-width: 600px) {
    .buttonCriaVaga{
        width: 40%;
    }
    h1{
        font-size:65px;
    }
}

`;
