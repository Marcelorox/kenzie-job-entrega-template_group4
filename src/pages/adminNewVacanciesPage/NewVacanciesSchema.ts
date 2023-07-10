import { z } from "zod";

export const newVacanciesZod = z.object({
    position: z
    .string()
    .nonempty("O campo é obrigatório"),
    sallary: z
    .string()
    .nonempty("O campo é obrigatório"),
    description: z
    .string()
    .nonempty("O campo é obrigatório"),
})

export type TNewVacanciesZod = z.infer<typeof  newVacanciesZod>

