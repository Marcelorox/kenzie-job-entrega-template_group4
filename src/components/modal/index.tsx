import { StyledDiv } from "./style";
import { useContext, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../context/candidateContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { TCandicateForm, candidateFormSchema } from "./zodCandidature";
import { Input } from "../inputs/Inputs";
import { StyledTitleTwo } from "../../style/typography";
import close from "../../assets/img/closeModal.svg";

interface IdetailsApplyJobs{
  userId:number;
  jobId:number;
  name:string;
  email:string;
  linkedin:string;
}

export const Modal = () => {

  const { setIsOpen, fetchApplications, applyJob } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TCandicateForm>({
    resolver: zodResolver(candidateFormSchema),
  });

  const modalRef = useRef(null);
  const buttonModalRef = useRef(null);

  // useEffect(() => {
  //   const modalOutClick = (event:React.MouseEvent) => {
  //     if (!modalRef.current?.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };
  //   window.addEventListener("mousedown", modalOutClick);

  //   return () => {
  //     window.removeEventListener("mousedown", modalOutClick);
  //   };
  // }, []);

  
  useEffect(() => {
    const buttonEsclRef = (event:KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", buttonEsclRef);

    return () => {
      window.removeEventListener("keydown", buttonEsclRef);
    };
  }, []);


  

  const candidateSubmit: SubmitHandler<TCandicateForm> = async (data) => {
  
    if(applyJob){
      const userJobId = { userId: applyJob.userId, jobId: applyJob.jobId };
      const detailsApplyJobs:IdetailsApplyJobs = { ...data, ...userJobId };
      fetchApplications(detailsApplyJobs);
      reset();
    } else {
      const userJobId ={userId: 0, jobId: 0}
    }
   
  };

  return (
    <StyledDiv>
      <div ref={modalRef} role="dialog" className="modalContainner">
        <div className="closeModal">
          <div className="closeModal_conatainner">
            <StyledTitleTwo>Candidatar-se</StyledTitleTwo>
            <img
              src={close}
              alt="X fecha modal"
              className="closeX"
              onClick={() => setIsOpen(false)}
            />
            <h5>
              Você está se candidatando para <span>{applyJob?.position}</span>{" "}
              na
              <span> {applyJob?.empresa}</span>
            </h5>
          </div>
        </div>

        <div className="form_containner">
          <form onSubmit={handleSubmit(candidateSubmit)}>
            <Input
              className="inputModal"
              type="text"
              placeholder="Nome"
              error={errors.name} 
              {...register("name")}
            />
            <Input
              className="inputModal"
              type="email"
              placeholder="E-mail"
              error={errors.email}
              {...register("email")}
            />
            <Input
              className="inputModal"
              type="text"
              placeholder="Linkedin"
              error={errors.linkedin}
              {...register("linkedin")}
            />

            <button className="buttonApply" ref={buttonModalRef} type="submit">
              Candidatar-se
            </button>
          </form>
        </div>
      </div>
    </StyledDiv>
  );
};
