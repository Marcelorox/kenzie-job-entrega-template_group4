import { AdminContext } from "../../../context/adminContext";
import { useForm } from "react-hook-form";
import { Input } from "../../inputs/Inputs"
import { TextArea } from "../../textarea"
import { useContext } from "react";
import { TUpdateForm, updateFormSchema } from "./UpdateJobSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../button/Button";
import { StyledFormMainContainer, StyleFormUpdatePage } from "./style";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export const UpdateForm = () => {
    const params = useParams()
    const { updateJobs } = useContext(AdminContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TUpdateForm>({
        resolver: zodResolver(updateFormSchema),
      });

      const UpdateSubmit = (formData : TUpdateForm) => {
        if (params.id) {
            console.log('entrou')
            const update = {...formData, userId: uuidv4()}
            console.log(update)
          const jobId : number = parseInt(params.id);
          updateJobs(update, jobId);
        }else{
            console.log('error')
        }
      };
      
    return(
        <StyleFormUpdatePage onSubmit={handleSubmit(UpdateSubmit)} className="form">
            <StyledFormMainContainer>
                <div className="input_div">
                    <Input type="text" placeholder="Cargo" error={errors.position} {...register("position")} className="input" />
                    <Input placeholder="Salário (opcional)" type="number" {...register("sallary")} className="input" />
                </div>
                <div>
                    <TextArea placeholder="Descrição" error={errors.description} {...register("description")} className="textArea" />
                </div>
            </StyledFormMainContainer>
            <Button text="Editar vagas" type="submit" className="button" />
        </StyleFormUpdatePage>
    )
}