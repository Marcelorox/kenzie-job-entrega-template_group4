import { z } from "zod";

export const candidateFormSchema = z.object({
    name: z
    .string()
    .nonempty("O campo é obrigatório"),
  email: z
    .string()
    .nonempty("O campo é obrigatório")
    .email("Forneça um E-mail válido"),
  linkedin: z
    .string()
    .nonempty("O campo é obrigatório"),
})

export type TCandicateForm = z.infer<typeof  candidateFormSchema>
