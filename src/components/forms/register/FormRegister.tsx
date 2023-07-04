import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "../../inputs/Inputs"
import { TRegisterForm, registerFormSchema } from "./RegisterFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../../button/Button"

export const FormRegister = () =>{
    const { register, handleSubmit, formState: { errors }} = useForm<TRegisterForm>({
        resolver: zodResolver(registerFormSchema)
    })

   const registerUserSubmit: SubmitHandler<TRegisterForm> = (formData) =>{
        console.log(formData);
        
   }

    return(
        <form onSubmit={handleSubmit(registerUserSubmit)}>
            <Input type="text" placeholder="Nome da emresa" error={errors.name} {...register("name")} />
            <Input type="email" placeholder="E-mail" error={errors.email} {...register("email")}/>
            <Input type="password" placeholder="Senha" error={errors.password} {...register("password")}/>
            <Input type="password" placeholder="Confirmar senha" error={errors.confirm_password} {...register("confirm_password")}/>
            <div className="form_button">
             <Button text={"Cadastrar-se"} type="submit" />
            </div>
        </form>
    )
}