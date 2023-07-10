import { styled } from "styled-components";

export const StyleContainerLoginPage = styled.div`
    width: 100%;
    max-width: 1328px;
    min-height: 80vh;
    margin: auto;
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 60px;
    
    .container_banner{
        display: none;
    
    }

    .container_login{

        h1{
            color: var(--blue);
        }
        form{
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 15px;

            input{
            border: 1px var(--blue) solid;
            height: 40px;
            border-radius: 50px;
            padding-left: 20px;
            margin-bottom: 10px;
            
        }
            input::placeholder{
            color: var(--size-placeholder);
        }

            .button_login{
            margin-top: 20px;
            display: flex;
            max-width: 480px;
            width: 100%;
            flex-direction: row;
            justify-content: flex-end;
            }

        }

        .createUser{
            margin-top: 15px;
            display: flex;
            justify-content: center;
            span{
                color: var(--blue);
                cursor: pointer;
            }
        }
    }

    @media (min-width: 800px) {
        .container_banner{
            display: block;
            height: 500px;
            min-width: 400px;

            img{
                width: 100%;
                height: 100%;
            }
        }

        .container_login{
            margin-top: 80px;
        }
    }
`