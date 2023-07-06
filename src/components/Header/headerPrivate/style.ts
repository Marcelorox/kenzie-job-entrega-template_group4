import { styled } from "styled-components";

export const StyleContainerHeaderPrivate = styled.div`
    width: 100%;
    max-width: 1328px;
    padding: 1rem;
    margin: auto;
    display: flex;
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
    }

    button{
        border: 1px solid var(--blue);
        padding: 10px 20px;
        border-radius: 30px;
        background-color: transparent;
        color: var(--blue);
        font-size: var(--size-paragraph);
    }
`