import styled from "styled-components";

export const StyleContainerAdminPage = styled.div`
  width: 100%;
  max-width: 1328px;
  padding: 1rem;
  margin: auto;

  .info__company{
    border: 1px solid red;
    margin-bottom: 20px;

    h1{
      color: var(--blue);
    }
  }

  .buttons_admin{
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;

    button{
      background-color: transparent;
      color: var(--black);
      font-weight: 700;


    }
    button:focus{
          color: var(--blue);
        }
  }
  @media (min-width: 700px) {
    width: 80%;
  }
`
