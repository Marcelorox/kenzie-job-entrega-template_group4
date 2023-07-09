import { AdminContext } from "../../../context/adminContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../../inputs/Inputs"
import { TextArea } from "../../textarea"
import { useContext } from "react";
import { TUpdateForm, updateFormSchema } from "./UpdateJobSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../button/Button";
import { StyledFormMainContainer, StyleFormUpdatePage } from "./style";
import { useParams } from "react-router-dom";

export const UpdateForm = () => {
    const { updateJobs } = useContext(AdminContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<TUpdateForm>({
        resolver: zodResolver(updateFormSchema),
      });

    const registerUpdateSubmit: SubmitHandler<TUpdateForm> = (formData, jobId) => {
        //updateJobs(formData);
      };

    return(
        <StyleFormUpdatePage onSubmit={handleSubmit(registerUpdateSubmit)} className="form">
            <StyledFormMainContainer>
                <div className="input_div">
                    <Input type="text" placeholder="Cargo" error={errors.position} {...register("position")} className="input" />
                    <Input placeholder="Salário (opcional)" type="text" {...register("sallary")} className="input" />
                </div>
                <div>
                    <TextArea placeholder="Descrição" error={errors.description} {...register("description")} className="textArea" />
                </div>
            </StyledFormMainContainer>
            <Button text="Editar vagas" type="submit" className="button" />
        </StyleFormUpdatePage>
    )
}