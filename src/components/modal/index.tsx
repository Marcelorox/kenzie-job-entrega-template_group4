// import { useEffect, useRef } from "react";
import { StyledDiv } from "./style";
import { useContext,useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { UserContext } from "../../context/candidateContext";
import { Input } from "@mui/material";
import { useForm } from "react-hook-form";
import { candidateFormSchema } from "./zodCandidatura";

// export const FormLogin = () => {
//   const { register, handleSubmit, formState: { errors }} = useForm<TLoginForm>({
//       resolver: zodResolver(loginFormSchema)
//   })

//   const loginUserSubmit: SubmitHandler<TLoginForm> = (formData) =>{
//       console.log(formData);
      
//   }

//   return(
//       <form onSubmit={handleSubmit(loginUserSubmit)}>
//           <Input type="email" placeholder="E-mail" error={errors.email} { ...register("email")}/>
//           <Input  type="password" placeholder="Senha" error={errors.password} { ...register("password")} />
//           <div className="button_login">
//               <button type="submit">Entrar</button>
//           </div>
//       </form>
//   )
// }

export const Modal = () => {

  const { setIsOpen,fetchApplications } = useContext(UserContext);

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

  const candidateSubmit: SubmitHandler<TCandidateForm> = (formData) => {
    console.log(formData)
    fetchApplications(formData);
    reset();
  };


  // useEffect(() => {
  //   const modalOutClick = (event) => {
  //     if (!modalRef.current?.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };
  //   window.addEventListener("mousedown", modalOutClick);

  //   return () => {
  //     window.removeEventListener("mousedown", modalOutClick);
  //   };
  // }, []);

  // useEffect(() => {
  //   const buttonEsclRef = (event) => {
  //     if (event.key === "Escape") {
  //       setIsOpen(false);
  //     }
  //   };
  //   window.addEventListener("keydown", buttonEsclRef);

  //   return () => {
  //     window.removeEventListener("keydown", buttonEsclRef);
  //   };
  // }, []);

  return (
    <StyledDiv>
      <div ref={modalRef} role="dialog" className="modalContainner">
        <div className="closeModal">
          <h1>Candidatar-se</h1>
          <h1 className="closeX" onClick={() => setIsOpen(false)}>
            x
          </h1>
          <p>
            Você está de candidatando para {`vaga`} na{" "}
            <span>Kenzie Academy Brasil</span>
          </p>
        </div>
        <div className="form_containner">
          <form onSubmit={handleSubmit(candidateSubmit)}>
            <Input
              type="text"
              placeholder="Nome"
              error={errors.nome}
              {...register("nome")}
            />
            <Input
              type="email"
              placeholder="E-mail"
              error={errors.email}
              {...register("email")}
            />
            <Input
              type="text"
              placeholder="Linkedin"
              error={errors.linkedin}
              {...register("linkedin")}
            />

            <button ref={buttonModalRef} type="submit">
              Candidatar-se
            </button>
          </form>
        </div>
      </div>
    </StyledDiv>
  );
};
