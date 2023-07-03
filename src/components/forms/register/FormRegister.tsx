import { useForm, SubmitHandler } from "react-hook-form"
import { Input } from "../../inputs/Inputs"
import { TRegisterForm, registerFormSchema } from "./RegisterFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"

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
            <Input type="text" placeholder="E-mail" error={errors.email} {...register("email")}/>
            <Input type="text" placeholder="Senha" error={errors.assword} {...register("password")}/>
            <Input type="text" placeholder="Confirmar senha" error={errors.confirm_password} {...register("confirm_password")}/>
            <button type="submit"></button>
        </form>
    )
}