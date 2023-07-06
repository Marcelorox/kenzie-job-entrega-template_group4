import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../../inputs/Inputs"
import { TLoginForm, loginFormSchema } from "./LoginFormSchema"
import { Button } from "../../button/Button"
import { useContext } from "react";
import { UserContext } from "../../../context/candidateContext"

export const FormLogin = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<TLoginForm>({
        resolver: zodResolver(loginFormSchema)
    })
    const { companyLogin } = useContext(UserContext)

    const loginUserSubmit: SubmitHandler<TLoginForm> = (formData) =>{
        companyLogin(formData)
    }

    return(
        <form onSubmit={handleSubmit(loginUserSubmit)}>
            <Input type="email" placeholder="E-mail" error={errors.email} { ...register("email")}/>
            <Input  type="password" placeholder="Senha" error={errors.password} { ...register("password")} />
            <div className="button_login">
                <Button text={"Entrar"} type="submit" />
            </div>
        </form>
    )
}