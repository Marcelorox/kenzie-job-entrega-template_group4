import { HTMLAttributes, forwardRef, ForwardedRef } from "react";

interface IPropsInput extends HTMLAttributes<HTMLInputElement>{
    type: string;
    label?: string;
    error: any;
    value: string;
}

export const Input = forwardRef(({ error, type, label, value, ...rest}: IPropsInput , ref: ForwardedRef<HTMLInputElement>)  =>{
    return(
        <>
            {label? <label> {label} </label>: null}
            <input type={type} ref={ref} value={value} {...rest} />
            {error? <p>{error.message}</p>: null }
        </>
    )
})