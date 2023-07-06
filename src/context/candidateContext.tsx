import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../api/api";
//import { NavigateFunction } from "react-router-dom";
import { AxiosResponse } from "axios";

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

interface IAdminLoginResponse{
  accessToken: string,
  user: IAdmin,
}

interface UserContextProps {
  
  jobs: Job[] | [];
  // navigate: NavigateFunction;
  fetchApplications: (formData: ApplicationsResponse) => void;
  admin: IAdmin | null;
  companyRegister: (formData: IAdminRegister) => void;
  companyLogin: (formData: IAdminLogin) => void;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
  );
  
  export const UserProvider = ({ children }: { children: ReactNode }) => {
    
    const [admin, setAdmin] = useState<IAdmin | null>(null)
    const [jobs, setJobs] = useState<Job[] | []>([]);
    // const navigate = useNavigate();
    
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
          await api.post("users", formData);
      } catch (error) {
          console.log(error);
      }
  }

  const companyLogin = async (formData: IAdminLogin) => {
      try {
          const { data } = await api.post<IAdminLoginResponse>("sessions", formData);
          localStorage.setItem("@TOKEN", data.accessToken);
          localStorage.setItem("@ADMINID", String(data.user.id));
          setAdmin(data.user);
      } catch (error) {
          console.log(error);
      }
  }

  const value: UserContextProps = {
    jobs,
   // navigate,
    admin,
    fetchApplications,
    companyRegister,
    companyLogin,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
