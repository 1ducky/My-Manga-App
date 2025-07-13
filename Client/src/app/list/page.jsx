import { TagUID } from "@/Data/TagUID"

import Link from "next/link"

export const metadata={
    title:'Tag Page'
}


export default function ListPage() {
    const GenreName=Object.values(TagUID.genre).map(item => item.Name).sort()
    const ThemeName=Object.values(TagUID.theme).map(item => item.Name).sort()

    return(
        <>
        <div className="w-screen pt-28 flex flex-col md:flex-row relative justify-center">
            <div className="relative w-full md:w-1/2 mt-5 px-5 pr-10">
                <h2 className="text-white absolute mx-5">Genre List</h2>
                <ul className="text-white flex flex-wrap w-full mx-5 mt-20 px-5 md:pr-16 items-center justify-around row-auto md:gap-x-2 gap-y-5">
                    {GenreName.map((Genre,index) => (

                            <li className={`p-5 bg-indigo-950 m-0 rounded-full hover:bg-sky-800 cursor-pointer flex-1  ${index === GenreName.length -1 ? 'md:flex-1' : 'md:flex-none'}`}  key={index}> 
                                <Link href={`/list/${Genre.replace(/ /g,"-").toLowerCase()}`} className="w-full h-full text-nowrap text-center">
                                    <h2 className="w-full h-full">
                                        {Genre.replace(/-/g," ")}
                                    </h2>
                                    
                                    
                                </Link>  
                            </li>
                            

                    ))}
                </ul>
            </div>
            <div className="relative w-full md:w-1/2 mt-5 px-5">
                <h2 className="text-white absolute mx-5">Theme List</h2>
                <ul className="text-white flex flex-wrap w-full md:mx-5 mt-20 px-5 md:pr-16 items-center justify-around row-auto md:gap-x-2 gap-y-5 pb-5 md:pb-0">
                    {ThemeName.map((Theme,index) => (

                        
                            <li className={`p-5 bg-indigo-950 m-0 rounded-full hover:bg-sky-800 cursor-pointer flex-1 ${index === ThemeName.length -1 ? 'md:flex-1' : 'md:flex-none'}`}  key={index}>
                                <Link href={`/list/${Theme.replace(/ /g,"-").toLowerCase()}`} className="w-full h-full text-nowrap text-center">
                                    <h2>
                                        {Theme.replace(/-/g," ")}
                                    </h2>
                                   
                                </Link>
                                
                            </li>

                    ))}
                </ul>
            </div>
        </div>
        
        </>
    )
}