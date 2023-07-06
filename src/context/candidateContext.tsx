import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../api/api";
//import { NavigateFunction } from "react-router-dom";
import { AxiosResponse } from "axios";
import { boolean } from "zod";

interface JobResponse extends AxiosResponse {
  data: Job[];
}

interface IUser{
  age:number;
  email:string;
  id:number;
  name:string;
  password:string;

}

interface Job {
  userId: number;
  id: number;
  position: string;
  salary: number;
  description: string;
  user:IUser
}

interface IUsers {
  email: string;
  password: string;
  name: string;
  age: number;
  id: number;
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

interface usersResponse extends AxiosResponse {
  data: IUsers[];
}

interface IAdmin {
  email: string;
  name: string;
  id: number;
}

interface IAdminRegister {
  email: string;
  password: string;
  name: string;
}

interface IAdminLogin {
  email: string;
  password: string;
}
interface IApplyJob {
  jobId: number;
  userId: number;
  position: string;
}
interface IAdminLoginResponse {
  accessToken: string;
  user: IAdmin;
}

interface IIsOpen {
  accessToken: string;
  user: IAdmin;
}

interface UserContextProps {
  jobs: Job[] | [];
  // navigate: NavigateFunction;
  fetchApplications: (formData: ApplicationsResponse) => void;
  admin: IAdmin | null;
  companyRegister: (formData: IAdminRegister) => void;
  companyLogin: (formData: IAdminLogin) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  applyJob: IApplyJob | null;
  setApplyJob: React.Dispatch<React.SetStateAction<IApplyJob | null>>;
  users: IUsers[] | [];
  setUsers: React.Dispatch<React.SetStateAction<[] | IUsers[]>>;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [admin, setAdmin] = useState<IAdmin | null>(null);
  const [jobs, setJobs] = useState<Job[] | []>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [applyJob, setApplyJob] = useState<IApplyJob | null>(null);
  // const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const { data }: JobResponse = await api.get("jobs",{ 
        params:{
          _expand:"user"
        }
      });
      console.log(data)
      setJobs(data);
      console.log(data)
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
      console.log("candidatura ok");
      setIsOpen(false);
    } catch (error) {
      console.log("falha na candidatura");
    }
  };

  const companyRegister = async (formData: IAdminRegister) => {
    try {
      await api.post("users", formData);
    } catch (error) {
      console.log(error);
    }
  };

  const companyLogin = async (formData: IAdminLogin) => {
    try {
      const { data } = await api.post<IAdminLoginResponse>(
        "sessions",
        formData
      );
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@ADMINID", String(data.user.id));
      setAdmin(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const value: UserContextProps = {
    jobs,
    // navigate,
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
