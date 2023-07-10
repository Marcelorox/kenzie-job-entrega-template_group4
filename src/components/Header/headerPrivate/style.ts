import { styled } from "styled-components";

export const StyleContainerHeaderPrivate = styled.div`
    width: 100%;
    max-width: 1328px;
    margin: auto;
    display: flex;
    padding: 1rem;
    justify-content: space-between;

    .container_nav{
        display: flex;
        gap: 10px;
        align-items: center;
    }

    
    .logo_name{
        background-color: var(--blue);
        padding: 5px;
        border-radius: 100%;
        height: 35px;
        width: 35px;
        display: flex;
        justify-content: center;
        align-items: center;

        h3{
            font-weight: 700;
        }
    }

    .logout{
        border: 1px solid var(--blue);
        padding: 10px 20px;
        border-radius: 30px;
        background-color: transparent;
        color: var(--blue);
        font-size: var(--size-paragraph);
    }

    .pieceNameCompany{
        background-color: var(--blue);
        color: white;
        font-family: var(--Font-primary);
        font-size:17px;
        font-weight:400;
    }
    @media (min-width: 700px) {
        width: 80%;
    }
`