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

    h1{
        font-size: var(--size-title1);
    }

    h2{
        font-size: var(--size-title2);
    }

    h3{
        font-size: var(--size-title3);
    }

    p, span{
        font-size: var(--size-paragraph);
    }

    label{
        font-size: var(--size-label);
    }

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