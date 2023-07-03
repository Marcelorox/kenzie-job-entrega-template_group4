import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../api/api";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface Job {
  "userId": number;
  "id": number;
  "position": string;
  "salary": number;
  "description": string;
}

interface ApplicationsRequest {
  "jobId": number,
  "userId": number,
  "name": string,
  "email": string,
  "linkedin": string
}
interface ApplicationsResponse{
  "name": string,
  "email": string,
  "linkedin": string
}

interface UserContextProps {
  jobs: Job[] | null;
  navigate: NavigateFunction;
  fetchApplications: (formData: ApplicationsResponse) => void;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[] | null>(null);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const response = await api.get("jobs");
      const jobsData: Job[] = response.data;
      console.log(jobsData)
      setJobs(jobsData);
    
    } catch (error) {
      console.log(error);
    }
  };

    useEffect(() => {
    fetchJobs();
  }, []);

     const fetchApplications = async (formData : ApplicationsResponse) => {
    try {
      const response = await api.post<ApplicationsRequest[]>("applications", formData);
    } catch (error) {
      console.log(error);
    }
  };



  const value: UserContextProps = {
    jobs,
    navigate,
    fetchApplications
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
