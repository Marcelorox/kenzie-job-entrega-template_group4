import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 79vh;
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

  .divInput{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 39.25rem;
    gap: 1rem;
  }

  input {
    display: flex;
    border: 1px solid blue;
    width: 75%;
    max-width: 542px;
    height: 66px;
    top: 278px;
    border-radius: 255px;
    border: 2px solid var(--blue);
    padding: 2rem;
  }

  input::placeholder {
    color: rgba(16, 17, 26, 0.5);;
    font-size: 1rem;
    font-weight: 400;
    line-height: 19.5px;
  }

  label, span {
    font-size: 1rem;
    font-weight: var(--weight-bold);
    color: var(--black);
    line-height: 20px;
  }
`

export const StyledButton = styled.button`
    display: flex;
    background-color: black;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 66px;
    height: 66px;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    padding: 5px;
    background-color: var(--blue);
    border: 1px solid var(--blue);
`
