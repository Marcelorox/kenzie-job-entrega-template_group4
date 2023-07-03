import { createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../api/api";

export interface Job {
  userId: number;
  id: number;
  position: string;
  salary: number;
  description: string;
}

interface UserContextProps {
  jobs: Job[] | null;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[] | null>(null);

  const fetchJobs = async () => {
    try {
        console.log('entrou')
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

  const value: UserContextProps = {
    jobs
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
