import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .nonempty("O campo de E-mail é obrigatório")
    .email("Forneça um E-mail válido"),
  password: z
    .string()
    .nonempty("A senha deve ser preenchida"),
})

export type TLoginForm = z.infer<typeof  loginFormSchema>
