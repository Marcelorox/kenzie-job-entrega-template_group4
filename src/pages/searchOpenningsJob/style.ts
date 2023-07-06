import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1328px;
  height: 80vh;
  font-family: var(--Font-primary);

  h1 {
    font-size: var(--size-title1);
    font-weight: var(--weight-bold);
    color: var(--blue);
    line-height: 300%;
  }

  h2 {
    font-weight:400;
    font-size: var(--size-title3);
    line-height: 36px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .divInput{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 560px;
    gap: 1rem;
  }

  input {
    display: flex;
    flex-direction: column;
    width: 86%;
    max-width: 542px;
    height: 66px;
    top: 278px;
    border-radius: 255px;
    border: 2px solid var(--blue);
    padding: 2rem;
  }

  input::placeholder {
    color: rgba(16, 17, 26, 0.5);
    font-size: 1rem;
    font-weight: 400;
    line-height: 19.5px;
  }

  label,span  {
    font-size: 1rem;
    font-weight: var(--weight-bold);
    color: var(--black);
    line-height: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 40px;
    padding-top: 20px;
    width: 80vw;
    max-height: 17rem;
    overflow: auto;
  }

  .emptyList {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 40px;
    width: 80vw;
    max-height: 17rem;
    overflow: auto;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 2rem;
  }

  @media(max-width: 600px) {
    .divInput{
      flex-direction: column;
      padding: 1rem;
      height: 120px;
      margin-bottom: 3rem;
    }

    h2 {
    font-weight:400;
    font-size: var(--size-title3);
    line-height: 22px;
  }
  }
`

export const StyledButton = styled.button`
    display: flex;
    background-color: black;
    align-items: center;
    justify-content: center;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    padding: 5px;
    background-color: var(--blue);
    border: 1px solid var(--blue);

    @media(max-width: 600px) {
      width: 44px;
      height: 44px;
    }
`
