'use client'


import { SideBarData } from "@/Data/SidebarData"
import { useState,useEffect } from "react"
import { usePathname,useRouter } from "next/navigation"

const SideBar = ( {isOpen,onMenuClick} ) => {
    const navigate=useRouter()

    const Path=usePathname().toLowerCase()
    const [CurentPatch,setCurentPatch] = useState(0)

    useEffect(() => {
        if( Path === '/ '){
            setCurentPatch(0)
        }else if( Path.startsWith('/list') ){
            setCurentPatch(1)
        }
        else if( Path.startsWith('/schedule') ){
            setCurentPatch(2)
        }
        else {
            setCurentPatch(0)
        }
        
    }, [Path])



    return(
        <>
            <div 
                className="fixed h-screen top-0 w-[70vw] md:w-96 bg-slate-800 z-30 p-7 pl-0 text-white text-2xl transition-all duration-300"
                style={{
                    left : `${isOpen ? '0' : '-75'}vw` 
                }}
            >
                <h2 className="w-full p-5 bg-indigo-950 rounded-r-full">
                    <button className="icon" onClick={onMenuClick}>
                    <i className="fa-solid fa-bars"></i> Menu</button>
                    </h2>
                
                <ul className="gap-3 flex flex-col w-full m-5">
                    {SideBarData[0].menu.map ((item,index) => (

                        <li 
                        
                        key={item.Title} 
                        onClick={() => navigate.push(item.Link)}
                        className="mx-5 text-xl cursor-pointer w-full p-3 px-6 hover:bg-indigo-950 rounded-full transition-all duration-300"
                        style={{
                            backgroundColor : `${CurentPatch === index ? '#1e1b4b' : ''}`
                        }}>

                            {item.Icon && <span>{item.Icon} </span>}
                            {item.Title}

                        </li>
                    ))}
                </ul>
                <ul className="w-full flex flex-col m-5 gap-5">
                    {SideBarData[0].submenu.map ((item) => (
                        
                        <li 
                        key={item.Title}
                        className="py-3 px-6 cursor-pointer text-xl hover:bg-indigo-950 rounded-full transition-all duration-300">
                            {item.Icon && <span>{item.Icon}</span>}
                            {item.Title}
                            </li>
                        
                    ))}
                </ul>

            </div>
        </>
    )
}

export default SideBar