import { styled } from "styled-components";

export const StyleModalDeleteContainer = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    width: 100%;
    height: 100vh;
    background: #00000080;
    padding: 0 10px;

    .modal{
        background-color: var(--lightblue);
        padding: 15px 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    }

    .buttons{
        display: flex;
        gap: 10px;

        #delete{
            background-color: red;
        }
    }

`