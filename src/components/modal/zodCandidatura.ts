import { z } from "zod";

export const candidateFormSchema = z.object({
    name: z
    .string()
    .nonempty("O campo é obrigatório"),
  email: z
    .string()
    .nonempty("O campo de E-mail é obrigatório")
    .email("Forneça um E-mail válido"),
  linkedin: z
    .string()
    .nonempty("A senha deve ser preenchida"),
})

export type TCandicateForm = z.infer<typeof  candidateFormSchema>
