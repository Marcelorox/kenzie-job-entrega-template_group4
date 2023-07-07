import { styled } from "styled-components";

export const StyleContainerVacancies = styled.div`


    div{
        display: flex;
        flex-direction: column;

        a{
            background-color: var(--blue);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 175px;
            height: 55px;
            border-radius: 30px;

                p{
                    color: var(--white);
                }
        }
    }
`