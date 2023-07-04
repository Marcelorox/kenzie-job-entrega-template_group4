import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  min-height: 3.625rem;
  padding: 1rem;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .footer_containner {
    width: 100%;
    max-width: 1328px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  h1 {
    color: var(--blue);
    font-size: 3rem;
  }
  p {
    color: white;
  }
`;
