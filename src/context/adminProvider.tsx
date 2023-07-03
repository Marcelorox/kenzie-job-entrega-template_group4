import { createContext, useState } from "react"
import { api } from "../api/api";

export const AdminContext = createContext({})

interface IAdminProviderProps{
    children: React.ReactNode;
}

interface IAdmin{
    email: string,
    name: string,
    id: number,
}

interface IAdminLoginResponse{
    accessToken: string,
    user: IAdmin,
}

export const AdminProvider = ({children}: IAdminProviderProps) => {
    const [admin, setAdmin] = useState<IAdmin | null>(null)

    const companyRegister = async (formData: any) => {
        try {
            const { data } = await api.post("users", formData);
        } catch (error) {
            console.log(error)
        }
    }

    const companyLogin = async (formData: any) => {
        try {
            const { data } = await api.post<IAdminLoginResponse>("sessions", formData);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@ADMINID", data.user.id);
            console.log(data)
            setAdmin(data.user);
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <AdminContext.Provider value={{}}>
            {children}
        </AdminContext.Provider>
    )
}