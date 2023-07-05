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

interface UserContextProps {

  jobs: Job[] | [];
  // navigate: NavigateFunction;
  fetchApplications: (formData: ApplicationsResponse) => void;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export const UserProvider = ({ children }: { children: ReactNode }) => {


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

  const value: UserContextProps = {
    jobs,
   // navigate,
    fetchApplications,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
