import { HTMLAttributes } from "react";

interface IPropsInput extends HTMLAttributes<HTMLInputElement>{
    type: string;
    label: string;
    error: any
}

export const Input (label, placeholder, error  ) : IPropsInput =>{
    return(
        <>
            {label? <label htmlFor="input"> {label} </label> : null}
            <input type={type} placeholder={placeholder}  />
            {error? <p>{error.message}</p>: null }
        </>
    )
}