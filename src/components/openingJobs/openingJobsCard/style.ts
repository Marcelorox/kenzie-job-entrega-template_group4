import styled from "styled-components";
export const StyledLi = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: style none;
  margin-bottom: 1rem;
  margin-bottom: 2rem;
  max-width: 1104px;
  min-height: 50px;
  .cardVaga_containner {
    display: flex;
    min-height: 70px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cardVaga_header {
    width: 100%;
    height: 50px;
    margin-bottom:1rem;
  }
  .cardVaga_header--containner {
    position: relative;
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
    }
    .addIcon {
      height: 20px;
      width: 20px;
      color: #8490ff;
      position: absolute;
      left: 0;
      top: 0;
    }
    button {
      position: absolute;
      right: 0;
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
    }
    .cardVaga_position {
      position: absolute;
      left: 4rem;
    }
  }
  .cardVaga_descripition {
    width: 100%;
    max-width: 917px;
    height: 40px;
  }
  .cardVaga_none{
    display:none;
  }
  @media (min-width: 600px) {
    button {
      position: absolute;
      right: 0;
    }
  }
`;