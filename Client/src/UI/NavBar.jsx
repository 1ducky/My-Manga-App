'use client'

import { useRouter } from "next/navigation";


const IsLogin=false
const NavigationBar=( {onMenuClick, onSearchBox} ) => {

    const Navigate=useRouter();
    
    return(
        <>
            <div className="w-full h-20 bg-indigo-950 flex justify-between px-5 items-center fixed z-20">
                <button className="w-11 h-11 bg-sky-800 rounded-full text-white font-extrabold text-2xl text-center justify-center" onClick={onMenuClick}><i className="fa-solid fa-bars"></i></button>
                <div className="flex-1 flex justify-center items-center">
                    <button className=" h-11 px-2 rounded-2xl bg-sky-800 text-white text-xl" onClick={() => Navigate.push('/')}>Kuma's</button>
                </div>
                <ul className="flex gap-2">
                    <button className="w-11 h-11 bg-sky-800 rounded-full text-white text-lg" onClick={onSearchBox}><i className="fa-solid fa-magnifying-glass"></i></button>
                    <button className="h-11 bg-sky-800 rounded-full min-w-11 md:px-5 px-2 text-xl text-white flex overflow-hidden justify-end w-[88px] items-center gap-2 md:w-auto">Balance: <i className="fa-solid fa-money-check-dollar"></i> 0112</button>
                    
                    <button className="min-w-11 min-h-11 w-11 md:w-auto bg-sky-800 rounded-full px-3 flex gap-x-5 items-center justify-start text-white text-lg overflow-hidden whitespace-nowrap">{IsLogin ? <i className="fa-solid fa-user"></i> : (<> <i className="fa-solid fa-user-plus"></i> Sign Up</>)}</button>
                    
                </ul>
            </div>
        </>
    )
}

export default NavigationBar