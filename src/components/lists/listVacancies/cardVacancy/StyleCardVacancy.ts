import { styled } from "styled-components";

export const StyleCardVacancy = styled.li`

.card__container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
}


    .card__container:hover{
        background-color: var(--lightblue);
    }

    div{
        display: flex;
        align-items: center;
        gap: 15px
    }

    .container_delete{
        cursor: pointer;
    }

 `