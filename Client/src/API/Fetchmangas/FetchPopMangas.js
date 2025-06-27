import { Maname } from "next/font/google"
import { useEffect, useState } from "react"



export const FetchPopMangas = (Limit,Offset) => {
    const [Mangas, setMangas ] = useState([])
    const [isFound, setisFound] = useState(false)

    const limit=Limit || 1
    const offset=Offset || 0
    const BaseURL=process.env.NEXT_PUBLIC_API_BACKEND
    useEffect(() => {
        const Tryfetch = async () => {
            try{
                const res= await fetch(`${BaseURL}/pop/${limit}/${offset}`)
                const Data= await res.json()
                if(!Array.isArray(Data.data) || Data.data === 0){
                    console.log('invalid object')
                }else{
                    setMangas(Data.data)
                    setisFound(true)
                }
            }catch{
                console.log('Nerwork Problem')
            }finally{
                console.log('Done')
            }
        }
        Tryfetch()
    },[limit,offset,BaseURL])

    return {Mangas,isFound}
}