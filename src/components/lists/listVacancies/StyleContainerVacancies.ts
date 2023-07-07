import { styled } from "styled-components";



export const StyleContainerVacancies = styled.div`
  .add_vacancies {
    display: flex;
    flex-direction: column;

    h1 {
      color: var(--blue);
    }

    a {
      background-color: var(--blue);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 150px;
      height: 45px;
      border-radius: 30px;

      img {
        height: 30px;
        width: 30px;
      }

      p {
        color: var(--white);
        font-size: 15px;
      }
    }
  }

  ul{
    margin-top: 30px;
    display: flex;
    flex-direction: column-reverse;
    gap: 30px
  }


  @media (min-width: 665px) {
    .add_vacancies {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      a {
        gap: 10px;
        width: 175px;
        height: 55px;
        border-radius: 30px;

        img {
          height: 40px;
          width: 40px;
        }

        p {
          color: var(--white);
          font-size: var(--size-paragraph);
        }
      }
    }
  }
`;
