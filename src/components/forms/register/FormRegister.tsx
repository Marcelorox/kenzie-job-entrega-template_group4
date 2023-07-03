import { useForm } from "react-hook-form"
import { Input } from "../../inputs/Inputs"

export const FormRegister = () =>{
   const [ register, handleSubmit, formData { errors }] = useForm({

   }) 

    return(
        <form action="register">
            <Input type="text" placeholder="Nome da emresa" error={error.name} {...register("name")/>
            <Input type="text" placeholder="E-mail" error={error.email} {...register("email")/>
            <Input type="text" placeholder="Senha" error={error.assword} {...register("password")/>
            <Input type="text" placeholder="Confirmar senha" error={error.confirm_password} {...register("confirm_password")/>

            <button type="submit"></button>
        </form>
    )
}