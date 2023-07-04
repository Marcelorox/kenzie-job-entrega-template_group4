import { StyleButton } from "./StyleButton"

 interface IButtonPros{
    text: string;
    type: string;
 }

export const Button = ({ text, type }: IButtonPros) =>{
    return(
        <StyleButton type={type}>
            {text}
        </StyleButton>
    )
}