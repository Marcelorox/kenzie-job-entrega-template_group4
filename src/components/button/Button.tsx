import { ButtonHTMLAttributes } from "react";
import { StyleButton } from "./StyleButton"

 interface IButtonPros extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
 }

export const Button = ({ text, ...rest }: IButtonPros) =>{
    return(
        <StyleButton {...rest}>
            {text}
        </StyleButton>
    )
}