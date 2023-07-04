import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../inputs/Inputs"
import { TLoginForm, loginFormSchema } from "./LoginFormSchema"

export const FormLogin = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<TLoginForm>({
        resolver: zodResolver(loginFormSchema)
    })

    const loginUserSubmit: SubmitHandler<TLoginForm> = (formData) =>{
        console.log(formData);
        
    }

    return(
        <form onSubmit={handleSubmit(loginUserSubmit)}>
            <Input type="email" placeholder="E-mail" error={errors.email} { ...register("email")}/>
            <Input  type="password" placeholder="Senha" error={errors.password} { ...register("password")} />
            <button type="submit">Entrar</button>
        </form>
    )
}