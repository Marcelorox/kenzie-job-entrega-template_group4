import { HTMLAttributes, forwardRef, ForwardedRef } from "react";

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
            {error? <p>{error.message}</p>: null }
        </>
    )
})