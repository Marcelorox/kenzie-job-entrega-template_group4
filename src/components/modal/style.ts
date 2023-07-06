import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  inset: 0;
  border: none;

  .modalContainner {
    position: absolute;
    width: 100%;
    max-height: 400px;
    max-width: 370px;
    border-radius: 0px 0px 5px 5px;
    background-color: #212529;
  }
  .form_containner {
    padding: 1rem;
  }

  .closeModal {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    height: 54px;
    background: #343b41;
    color: white;
  }
  .closeX {
    cursor: pointer;
    color: #868e96;
  }
  button {
    width: 100%;
    max-width: 400px;
    height: 60px;
    background: #ff577f;
    border: 1px solid #ff577f;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    color: white;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #868e96;
  }
  h5{

    margin-top: 1rem;
    margin-bottom: 1rem;
    color:yellow;
  }


  select {
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    padding: 0px 16.2426px;
    width: 100%;
    height: 45px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #868e96;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  input {
    color: #868e96;
    background: #343b41;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  input:hover {
    border: 1.2182px solid #f8f9fa;
  }

`;

