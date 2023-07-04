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

    --size-title1: 4rem;
    --size-title2: 2.75rem;
    --size-title3: 1.3125rem;

    --size-paragraph: 1.125rem;
   --size-label: 1.0625rem;
   --size-placeholder: 1rem;

    --weight-bold: 700;

    --Font-primary: 'Montserrat', sans-serif;


    button{
        cursor: pointer;
        background-color: transparent;
        border: none;
    }

    input{
        background-color: transparent;
        border: none;
    }

}
`