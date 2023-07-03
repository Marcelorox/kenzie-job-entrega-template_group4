import { createContext } from "react"

export const AdminContext = createContext({})

interface IAdminProviderProps{
    children: React.ReactNode;
}

export const AdminProvider = ({children}: IAdminProviderProps) => {
    return(
        <AdminContext.Provider value={{}}>
            {children}
        </AdminContext.Provider>
    )
}

