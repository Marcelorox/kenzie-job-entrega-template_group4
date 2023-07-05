import { HTMLAttributes, forwardRef, ForwardedRef } from "react";
import { StyleAlertSchema } from "./StyleAlertSchema";

interface IPropsInput extends HTMLAttributes<HTMLInputElement>{
    type: string;
    label?: string;
    error: any;

}

export const Input = forwardRef(({ error, type, label, ...rest}: IPropsInput , ref: ForwardedRef<HTMLInputElement>)  =>{
    return(
        <>
            {label? <label> {label} </label>: null}
            <input type={type} ref={ref} {...rest} />
            {error? <StyleAlertSchema>{error.message}</StyleAlertSchema>: null }
        </>
    )
})