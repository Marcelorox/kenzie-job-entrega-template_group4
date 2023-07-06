import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../api/api";
//import { NavigateFunction } from "react-router-dom";
import { AxiosResponse } from "axios";
import { boolean } from "zod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface JobResponse extends AxiosResponse {
  data: Job[]
}

interface Job {
  userId: number;
  id: number;
  position: string;
  salary: number;
  description: string;
}

interface ApplicationsRequest {
  jobId: number;
  userId: number;
  name: string;
  email: string;
  linkedin: string;
}

interface ApplicationsResponse extends AxiosResponse {
  data: {
    name: string;
    email: string;
    linkedin: string;
  };
}

interface IAdmin{
  "email": string,
  "name": string,
  "id": number,
}

interface IAdminRegister {
  "email": string,
  "password": string,
  "name": string,
}

interface IAdminLogin {
  "email": string,
  "password": string,
}
interface IApplyJob{
  jobId: number;
  userId: number;
}
interface IAdminLoginResponse{
  accessToken: string,
  user: IAdmin,
}

interface IIsOpen{
  accessToken: string,
  user: IAdmin,
}

interface UserContextProps {
  
  jobs: Job[] | [];
  navigate: NavigateFunction;
  fetchApplications: (formData: ApplicationsResponse) => void;
  admin: IAdmin | null;
  companyRegister: (formData: IAdminRegister) => void;
  companyLogin: (formData: IAdminLogin) => void;
  isOpen:boolean;
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
  applyJob:IApplyJob| null;
  setApplyJob:React.Dispatch<React.SetStateAction<IApplyJob | null>>
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
  );
  
  export const UserProvider = ({ children }: { children: ReactNode }) => {
    
    const [admin, setAdmin] = useState<IAdmin | null>(null)
    const [jobs, setJobs] = useState<Job[] | []>([]);
    const [isOpen,setIsOpen]= useState(false)
    const [applyJob,setApplyJob]= useState<IApplyJob| null>(null)
    const navigate = useNavigate();
    
  const fetchJobs = async () => {
    try {
      const {data} : JobResponse = await api.get("jobs");
      setJobs(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchApplications = async (formData: ApplicationsResponse) => {
    try {
      const { data }: ApplicationsResponse =
        await api.post<ApplicationsRequest>("applications", formData);
    } catch (error) {
      console.log(error);
    }
  };

  const companyRegister = async (formData: IAdminRegister) => {
      try {
          await  api.post("users", formData);
          toast.success("Empresa criada com sucesso")
          navigate("/entrar")
      } catch (error) {
          console.log(error);
          toast.error("Dados já cadastrados")
      }
  }

  const companyLogin = async (formData: IAdminLogin) => {
      try {
        console.log("entrou");
        const { data } = await api.post<IAdminLoginResponse>("login", formData);
          localStorage.setItem("@TOKEN", data.accessToken);
          localStorage.setItem("@ADMINID", String(data.user.id));
          setAdmin(data.user);
          navigate("/dashboard")
      } catch (error) {
          console.log(error);
          toast.error("Senha ou E-mail incorretos")
      }
  }

  const value: UserContextProps = {
    jobs,
    navigate,
    admin,
    fetchApplications,
    companyRegister,
    companyLogin,
    setIsOpen,
    isOpen,
    applyJob,
    setApplyJob,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
