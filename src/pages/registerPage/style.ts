import { styled } from "styled-components";

export const StyleContainerForm =styled.div`
    width: 100%;
    max-width: 1328px;
    margin: auto;
  

    .form_container{
        padding-top: 60px;
        width: 100%;
        max-width: 480px;
        margin: auto;
        padding: 10px;

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    .link_register{
        margin-bottom: 20px;
        margin-left: 10px;
    }
    
    h1{
        color: var(--blue);
        margin-bottom: 20px;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 100%;

        input{
            border: 1px var(--blue) solid;
            height: 40px;
            border-radius: 50px;
            padding-left: 20px;
            margin-bottom: 10px;

            ::placeholder{
                font-size: var(--size-placeholder);
                color: red;
            }
            
            
        }
    }
`