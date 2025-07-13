'use client'

import { notFound, useParams, useSearchParams } from "next/navigation";
import { TagUID } from "@/Data/TagUID";
import { useEffect, useState } from "react";


import ResultTagPage from "@/component/TagPage/ResultTagPage";

export default function TagPage (  ) {
    const searchparams = useSearchParams()
    const [GetUID, setGetUID ] = useState("")

    const {slug} = useParams()
    const Pages =Math.max( parseInt(searchparams.get('page') || '1') - 1, 0)
    
    function toSlug(str) {
        return str
            .toLowerCase()
            .replace(/'/g, "")             
            .replace(/[^a-z0-9]+/g, '-')   
            .replace(/(^-|-$)+/g, '');     
    }


    useEffect (() => {
        const normalslug= toSlug(slug)
        let Found = false
        for (const Objkey in TagUID){
            for(const ObjRef in TagUID[Objkey]){
                const { UID, Name } = TagUID[Objkey][ObjRef]
                if(toSlug(Name).toLowerCase() === normalslug.toLowerCase()){
                    setGetUID(UID)
                    Found = true
                    console.log(UID)
                    return
                }
            }
        }
        if(!Found){
            notFound()
        }
    },[slug])

    
    if(!GetUID){
        return <div>Loading</div>
    }

    return(
        <>  { GetUID && (
            <ResultTagPage UID={GetUID} Page={Pages} Name={slug.replace(/-/g,' ')}/>
        )}
            
        </>
    )
}