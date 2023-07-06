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
  z-index: 1;

  .modalContainner {
    position: absolute;
    width: 100%;
    min-height: 550px;
    max-width: 530px;
    border-radius: 0px 0px 5px 5px;
    background-color: white;
    padding: 1rem;
  }


  form {
    display: flex;
    flex-direction: column;
  }

  .closeModal_containner {

    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: flex-start;
    min-height: 90px;
    background: white;
    color: blue;
  
  }
  img {
      width: 20px;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

  .closeModal {
    position: relative;
  }
 
  .buttonApply{
    width: 50%;
    height: 60px;
    background: var(--blue);
    border: 1px solid var(--blue);
    border-radius: 40px;
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
    align-self: flex-end;
  }
  h2 {
    color: var(--blue);
    font-size: 30px;
  }

  p {
    font-family: "Inter";
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    color: black;
  }
  span {
    font-family: inter;
    font-weight: 700;
    font-size: 18px;
    line-height: 36px;
    color: black;
  }

  .inputModal{
    color: var(--inputColor);
    background: white;
    border: 1px solid var(--blue);
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 66px;
    border-radius: 50px;
    padding: 2rem;
  }
 
  @media (min-width: 600px) {
    h2{
      font-size: var(--size-title2);
    }
  }
`;
