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

img {
    position: absolute;
    top: 10px;
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
    height: 19px;
    position: absolute;
    bottom: 0;
    right: 25%;
  }

  .headerButton{
    display: none;
  }

  @media (min-width: 600px) {
    .header_containner {
      height: 55px;
    }

    .headerButton{
      display: block;
      height: 55px;
      position: absolute;
      top: 0;
      right: 70px;
      display: block;
      padding-right: 1rem;
      padding-left: 1rem;
      background-color: var(--blue);
      color: white;
      border: 1px solid var(--blue);
      border-radius: 40px;
    }

    .span_containner {
      width: 150px;
      height: 55px;
      position: absolute;
      top: 0;
      right: 270px;
    
    }
    span {
      position: absolute;
      top: 17.75px;
      left: 0;
    }
  }
`;
