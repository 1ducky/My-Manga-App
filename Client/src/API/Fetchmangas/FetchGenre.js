import { useState,useEffect } from "react";

export default function FetchSearchTag (limit,UID,Offset) {
    const [Mangas,setMangas] = useState([])
    const [Total,setTotal]=useState('')

    useEffect(()=>{
        if(!UID) return
        setMangas([])
        setTotal('')


        const Tryfetch= async () => {
            const BaseURL=process.env.NEXT_PUBLIC_API_BACKEND
            const Limit = limit || 10
            try{
                const res=await fetch(`${BaseURL}/genre/${Limit}/${UID}/${Offset}`)
                const data=await res.json()
                if(!Array.isArray(data.data) || data.data.length === 0){
                    console.log("feiled")

                }else{
                    setMangas(data.data)
                    
                    setTotal(data.total)
                }

            }
            catch(err){
                console.log('error')
            }
            finally{
                console.log('Fetch Done')

            }
        }
        Tryfetch()
        
    },[UID,limit,Offset])
    return { Mangas,Total }
}