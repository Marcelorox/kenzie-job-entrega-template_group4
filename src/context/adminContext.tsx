import { createContext, useState } from "react"
import { api } from "../api/api";
import { AxiosResponse } from "axios";
import { useNavigate, NavigateFunction } from "react-router-dom";


interface IAdminProviderProps{
    children: React.ReactNode;
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

interface IAdminCandidatesResponse {
    data: Candidates
}

interface IAdminJobResponse extends AxiosResponse {
    data: Jobs
}

interface AdminContextProps {
    specificJobs: IAdminJobResponse | null,
    candidates: IAdminCandidatesResponse | null;
    admin: IAdmin | null;
    navigate: NavigateFunction,
    companyRegister: (formData: IAdminRegister) => void,  
    companyLogin: (formData: IAdminLogin) => void,
}

export const AdminContext = createContext<AdminContextProps>(
    {} as AdminContextProps
);

export const AdminProvider = ({children}: IAdminProviderProps) => {
    const [admin, setAdmin] = useState<IAdmin | null>(null)
    const [specificJobs, setSpecificJobs] = useState<IAdminJobResponse | null>(null)
    const [candidates, setCandidates] = useState<IAdminCandidatesResponse | null>(null)

    const navigate = useNavigate()
    
    const token = localStorage.getItem("@TOKEN")
    const userId = localStorage.getItem("@USERID")
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

    const listComapnyJobs = async () => {
        try {
            const data : IAdminJobResponse = await api.get(`users/${userId}/jobs`, { headers: { Authorization : `Bearer ${token}` }})
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
            const data : IAdminCandidatesResponse = await api.get(`jobs/${userId}/applications`, { headers: { Authorization : `Bearer ${token}` }})
            setCandidates(data)
        } catch (error) {
            console.log(error)
        }

        if(token && userId) {
            listComapnyCandidates()
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USERID")
        setAdmin(null)
        setSpecificJobs(null)
        navigate("/")
    }
    
    const value : AdminContextProps  = {
        specificJobs,
        candidates,
        admin,
        navigate,
        companyRegister,
        companyLogin,
    }
    
    return(
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
