import { styled } from "styled-components";

export const StyledFormMainContainer = styled.div`
    font-family: var(--Font-primary);

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 700px) {
        flex-direction: row;
    }
    
    .input {
        margin-bottom: 10px;

        height: 66px;

        border-radius: 255px;

        border: solid 1px var(--blue);
        
        padding-left: 44px;

        font-size: 16px;

        @media (min-width: 700px) {
            width: 38vw;
            margin-bottom: 17px;
        }
    }

    .input_div {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        
        @media (min-width: 700px) {
        }
    }

    .textArea {
        width: 100%;
        font-family: var(--Font-primary);

        border-radius: 30px;

        padding-left: 36px;
        padding-top: 23px;

        font-size: 16px;

        border: solid 1px var(--blue);

        height: 236px;

        margin-bottom: 10px;

        @media (min-width: 700px) {
            margin-bottom: 34px;
            width: 38vw;
        }
    }
`

export const StyleFormUpdatePage = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
    @media (min-width: 700px) {
        align-items: center;
        }

    .button {
        width: 183px;
        height: 58px;

        border-radius: 255px;

        font-size: 17px;
    }
`