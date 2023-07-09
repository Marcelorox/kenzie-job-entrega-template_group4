import styled from "styled-components";

export const Styledsection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .sectionContainner {
    width: 100%;
    max-width: 1328px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .arrowImg {
    width: 18px;
  }
  .return {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80px;
  }
  a{
    display: flex;
    flex-direction: row;
    gap: 20px;

    p{
      color: var(--blue);
    }
  }
  .returnContainner {
    align-self: center;
    width: 100%;
    max-width: 1328px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
  }
  
  h1 {
    font-family: var(--Font-primary);
    color: var(--blue);
    font-weight: 700;
    font-size: 44px;
    line-height: 78px;
    margin-bottom: 2rem;
  }
  .formSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 639px;
  }

  .inputNewPosition {
    height: 66px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid var(--blue);
    border-radius: 40px;
  }

  .inputNewPositionDescription {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: 236px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid var(--blue);
    border-radius: 40px;
    font-family: var(--Font-primary);
  }

  .inputNewPosition,
  .inputNewPositionDescription {
    font-weight: 700;
    font-size: var(--size-menu);
    line-height: 19.5px;
    color: rgba(16, 17, 26, 0.5);
  }

  .buttonNewPositionCreate {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 55%;
    max-width: 194px;
    align-self: flex-end;
    border: 1px solid var(--blue);
    border-radius: 40px;
    background: var(--blue);
    height: 58px;
    color: white;
    font-family: var(--Font-primary);
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
  }

  @media (min-width: 600px) {
    .buttonNewPositionCreate {
      width: 40%;
    }
    h1 {
      font-size: 65px;
    }
  }

  @media (min-width: 700px) {
    .returnContainner {
      width: 80%;
    }
  }
`;
