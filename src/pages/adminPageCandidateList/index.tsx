import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/adminContext";

export const AdminPageCandidateList = () => {

    const { candidateList, candidates } = useContext(AdminContext)
    
    
    useEffect(() => {
        const companyID = localStorage.getItem("@ADMINID")

        candidateList(Number(companyID))
    },[] ) 
    
    console.log(candidates)
    
    return (
        <>
           <h1>TESTE</h1>
        </>
    )
}