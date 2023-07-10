import styled from "styled-components";

export const StyledLi = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: style none;
  margin-bottom: 2rem;
  max-width: 1104px;
  min-height: 50px;

  .cardPosition_containner {
    display: flex;
    min-height: 150px;
    flex-direction: column;
  }
  .cardPosition_header {
    width: 100%;
    min-height: 150px;
    margin-bottom: 1rem;
    position: relative;
  }
  .cardPosition_header--containner {
    margin-bottom: 1rem;

    p {
      color: #8490ff;
    }

    .subIcon {
      height: 20px;
      width: 20px;
      color: #8490ff;
      position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
    }
    .addIcon {
      height: 20px;
      width: 20px;
      color: #8490ff;
      position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
    }

    .buttonCard{
      position: absolute;
      bottom: 0;
      right: 32%;
      color: var(--blue);
      border: 1px solid var(--blue);
      border-radius: 40px;
      height: 38px;
      padding-right: 1.5rem;
      padding-left: 1.5rem;
      background-color: white;
      color: var(--blue);
      border: 1px solid var(--blue);
      border-radius: 40px;
      @media(min-width: 800px) {
        right: 0%;
      }
    }

    .cardPosition_positionDetails {
      position: absolute;
      left: 4rem;
    }
  }

  .cardPosition_descripitionDetails {
    width: 100%;
    max-width: 985px;
    min-height: 60px;
  }
  .cardPosition_descripitionDetailsNone {
    display: none;
  }
h3{
  margin-top: 0.5rem;
}
  @media(min-width: 800px) {
    .cardPosition_containner {
      align-items: center;
      min-height: 80px;
      justify-content: center;
    }
    .cardPosition_header {
      width: 100%;
      min-height: 50px;
    }
   
  }
`;
