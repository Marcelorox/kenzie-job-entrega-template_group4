import { z } from "zod";

export const updateFormSchema = z.object({
  position: z
    .string()
    .nonempty("Cargo é obrigatório")
    .min(3, "Nome precisa de elo menos 3 caracteres"),
  sallary: z
    .string(),
  description: z
    .string()
    .nonempty("Descrição é obrigatória")
})

export type TUpdateForm = z.infer<typeof updateFormSchema>