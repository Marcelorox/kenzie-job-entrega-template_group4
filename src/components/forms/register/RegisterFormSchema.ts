import { z } from "zod";

export const registerFormSchema = z.object({
  name: z
    .string()
    .nonempty("Nome da empresa é obrigatório")
    .min(3, "Nome precisa de elo menos 3 caracteres"),
  email: z
    .string()
    .nonempty("Email é obrigatório")
    .email("Forneça um email válido"),
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8,"Senha precisa ter pelo menos 8 caracteres sendo maiúsculas, minúsculas, numeros e caracteres especiais")
    .regex(/(?=.*?[A-Z])/, "Deve conter pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "Deve conter pelo menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "Deve conter pelo menos um número")
    .regex(/(?=.*?[#?!@$%^&*-])/, "Deve conter elo menos um caracter especial (@,#,$,&...)"),
  confirm_password: z
    .string()
    .nonempty("Confirmar senha é obrigatório")
}).refine(({ password, confirm_password}) => password === confirm_password, {
  message: "As senhas precisam ser iguais",
  path: ["confirm_password"],
} )

export type TRegisterForm = z.infer<typeof registerFormSchema>
