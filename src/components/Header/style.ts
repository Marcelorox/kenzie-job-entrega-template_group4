import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  min-height: 3.625rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .header_containner {
    width: 100%;
    max-width: 1328px;
    position: relative;
    height: 84px;
  }

  h1 {
    color: var(--blue);
    font-size: 3rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  .lupa {
    height: 55px;
    color: var(--blue);
    position: absolute;
    top: 0;
    right: 0;
  }
  .span_containner {
    width: 150px;
    height: 19.5;
    position: absolute;
    bottom: 0;
    right: 50%;
  }

  button {
    display: none;
  }

  @media (min-width: 600px) {
    .header_containner {
      height: 55px;
    }

    button {
      display: block;
      height: 55px;
      position: absolute;
      top: 0;
      right: 70px;
      display: block;
      background-color: var(--blue);
      color: white;
    }

    .span_containner {
      width: 150px;
      height: 55px;
      position: absolute;
      top: 0;
      right: 250px;
    }
    span {
      position: absolute;
      top: 17.75px;
    }
  }
`;
