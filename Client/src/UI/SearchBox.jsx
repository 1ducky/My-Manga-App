'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"




export const SearchBox = ({isOpen}) => {
    const navigate= useRouter()
    const [SearchTerm,setSearchTerm] = useState('')

    const HandleSearch= (Key) => {
        if (!Key) return
        navigate.push(`/search/${Key}/`)
    }

    const Handlekeydown= (e) => {
        if(e.key === 'Enter'){
            HandleSearch(SearchTerm)
        }
    }

    return(
        <>
            <div className={`fixed mx-4 w-full md:w-96 flex ${isOpen ? 'top-16' : 'top-0'} md:right-5 z-[12] gap-2 bg-indigo-950 rounded-b-3xl p-5 justify-center transition-all duration-300`}>
                <input type="text" 
                 className="md:w-72 w-full rounded-full px-3 bg-sky-800 focus:border-none focus:outline-none text-white"
                 onChange={(e) => setSearchTerm(e.target.value)}
                 onKeyDown={Handlekeydown}/>
                <button id="enter" className="w-10 h-10 text-center bg-indigo-950 text-sm text-white rounded-full"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            
        </>
    )

    
}