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

interface IAdminRegister {
    email: string,
    password: string,
    name: string,
}

interface IAdminLogin {
    emai: string,
    password: string,
}

interface IAdminLoginResponse{
    accessToken: string,
    user: IAdmin,
}

export const AdminProvider = ({children}: IAdminProviderProps) => {
    const [admin, setAdmin] = useState<IAdmin | null>(null)

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
            console.log(data);
            setAdmin(data.user);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <AdminContext.Provider value={{}}>
            {children}
        </AdminContext.Provider>
    )
}