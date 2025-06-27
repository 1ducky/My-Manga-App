
import { useEffect, useState } from "react";


export default function FetchLastestMangas (Limit,Offset) {
    const [ Mangas, setMangas ] = useState([])
    const [ isFound, setisFound] = useState(false)



    const BasseURL=process.env.NEXT_PUBLIC_API_BACKEND
    const limit = Limit || 1
    const offset = Offset || 0
    useEffect(() =>{
        
        const TryFetch = async () => {
            try{
                const res= await fetch(`${BasseURL}/new/${limit}/${offset}`)
                const Data= await res.json()
                if(!Array.isArray(Data.data) || Data.data === 0){
                    console.log('No Responds')
                }else{
                    setMangas(Data.data)
                    setisFound(true)
                }
            }catch(err){
                console.log('Failed')
            }finally{
                console.log('Done')
            }
            
        }
        TryFetch()
    },[limit,offset,BasseURL])

    return{ Mangas, isFound }
}