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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  p {
    color: white;
  }


  @media (min-width: 600px) {
    
  .footer_containner {
    justify-content: space-between;
    flex-direction: row;
    }
    div{

    }
  }
`;
