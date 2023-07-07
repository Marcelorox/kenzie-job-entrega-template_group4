import styled from "styled-components";

export const StyledAllUpdatePage = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .main {
        
    }
`

export const StyleContainerUpdatePage = styled.div`
    width: 100%;
    max-width: 80%;
    margin: auto;

    .return_button {
        color: var(--blue);
        font-weight: 700;
    }

    .link_register {
        display: flex;
        align-items: center;

        img {
            width: 20px;
            height: 20px;
            
            margin-right: 20px;
        }
    }

    .vacancie_name {
        font-weight: 700;
        font-size: clamp(32px, 6vw, 44px);

        margin-bottom: 27px;

        color: var(--blue);

        margin-top: 20px;

        @media (min-width: 700px) {
            margin-top: 50px;
            margin-bottom: 47px;
        }
    }
`