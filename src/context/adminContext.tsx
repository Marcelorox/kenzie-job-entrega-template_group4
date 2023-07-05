import { createContext, useState } from "react"
import { api } from "../api/api";
import { AxiosResponse } from "axios";
import { useNavigate, NavigateFunction } from "react-router-dom";


interface IAdminProviderProps{
    children: React.ReactNode;
}

interface Jobs {
    "userId": number,
    "id": number,
    "position": string,
    "sallary": number,
    "description": string,
}

interface Candidates {
    "id": number,
    "jobId": number,
    "userId": number,
    "name": string,                                                                                                                                                                                                                                                                                                                                                            "email": string,
    "linkedin": string,
}

interface IAdminAddJobs {
    "position": string,
    "sallary": string,
    "description": string, 
}

interface IAdminAddJobsResponse {
    "userId": number,
    "position": string,
    "sallary": string,
    "description": string,
}

// interface IAdminUpdateJobs {
//     "position": string,
//     "sallary": number,
//     "description": string,
// }

interface IAdminCandidatesResponse extends AxiosResponse {
    data: Candidates[]
}

interface IAdminJobResponse extends AxiosResponse {
    data: Jobs[]
}

interface AdminContextProps {
    specificJobs: IAdminJobResponse[] | [];
    candidates: IAdminCandidatesResponse[] | [];
    navigate: NavigateFunction;
    handleLogout: () => void;
}

export const AdminContext = createContext<AdminContextProps>(
    {} as AdminContextProps
);

export const AdminProvider = ({children}: IAdminProviderProps) => {
    
    const [specificJobs, setSpecificJobs] = useState<IAdminJobResponse[] | []>([])
    const [candidates, setCandidates] = useState<IAdminCandidatesResponse[] | []>([])

    const navigate = useNavigate()

    const token = localStorage.getItem("@TOKEN")
    const userId = localStorage.getItem("@USERID")

    const listComapnyJobs = async () => {
        try {
            const data : IAdminJobResponse[] = await api.get(`users/${userId}/jobs`, { headers: { Authorization : `Bearer ${token}` }})
            setSpecificJobs(data)
        } catch (error) {
            console.log(error)
        }

        if(token && userId) {
           listComapnyJobs()
        }
    }

    const listComapnyCandidates = async () => {
        try {
            const data : IAdminCandidatesResponse[] = await api.get(`jobs/${userId}/applications`, { headers: { Authorization : `Bearer ${token}` }})
            setCandidates(data)
        } catch (error) {
            console.log(error)
        }
        if(token && userId) {
            listComapnyCandidates()
        }
    }

    const addJobs = async (formData: IAdminAddJobs) => {
        try {
            await api.post<IAdminAddJobsResponse>("jobs", formData, { headers: { Authorization : `Bearer ${token}` }});
        } catch (error) {
            console.log(error);
        }
    }

    // const updateJobs = async (formData: IAdminUpdateJobs) => {
    //     try {
    //         await api.put("jobs/:id", { headers: { Authorization : `Bearer ${token}` }});
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const handleLogout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setSpecificJobs([])
        navigate("/")
    }
    
    const value : AdminContextProps  = {
        specificJobs,
        candidates,
        navigate,
        handleLogout,
    }
    
    return(
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}