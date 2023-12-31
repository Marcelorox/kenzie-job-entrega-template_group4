import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{

    --black: #101119;
    --white: #FFFFFF;
    --lightblue: #F9F9FF;
    --blue: #8490FF;
    --inputColor:#10111A;

    --size-title1: clamp(1.875rem, 10vw, 4rem);
    --size-title2: 2.75rem;
    --size-title3: 1.3125rem;

    --size-paragraph: 1.125rem;
   --size-label: 1.0625rem;
   --size-placeholder: 1rem;
   --size-menu: 1rem;

    --weight-bold: 700;

    --Font-primary: 'Montserrat', sans-serif;


    body, button, label {
        font-family: var(--Font-primary);
    }

    button{
        cursor: pointer;
        border: none;
    }

    input{
        background-color: transparent;
    }

    a{
        cursor: pointer;
        text-decoration: none
    }

    ul{
        list-style: none;
    }

}

`