'use client'

import { useState } from "react"

//Import Hooks
import FetchLastestMangas from "@/API/Fetchmangas/FetchLastestMangas"

import { useRouter } from "next/navigation"
import Image from "next/image"


const Slide = () => {
    const [index,setIndex] = useState(0)
    const { Mangas, isFound } = FetchLastestMangas(10,0)
    const navigate=useRouter()

    const Totalimage=Mangas.length


    const NextSlide = () => {
        setIndex(prev => (prev < Totalimage - 1 ? prev + 1 : prev - (Totalimage-1)))
    }
    const PrevSlide = () => {
        setIndex(prev => (prev > 0 ? prev -1 : prev + (Totalimage-1)))
    }

    const truncate = (text,limit=200) =>{
        return(text.length > limit ? text.substring(0,limit)+"..." : text)
    }
    return(
        <>
            <div className="w-full h-[90vh] bg-indigo-800 overflow-hidden relative transform-gpu will-change-transform">
                    <ul className="img flex flex-nowrap h-full transition-transform duration-500" style={
                        {
                            width:`${Mangas.length*100}vw`,
                            transform: `translateX(-${index * 100}vw)`,
                            
                        }
                    }>

                        
                        {Mangas.map ((item,index) =>
                        {
                            const CoverRel=item.relationships.find((rel) => rel.type === "cover_art")
                            const FileName=CoverRel?.attributes?.fileName
                            const FetchCover= FileName ? `https://uploads.mangadex.org/covers/${item.id}/${FileName}.512.jpg` : null
                            
                            
                            return (
                            <li key={item.id} className="w-screen h-full bg-sky-800 flex items-center justify-center relative">
                                <Image src={FetchCover} 
                                alt={item.attributes.title.en || item.attributes.title["ja-ro"] || item.attributes.title.ja || "No Title"} 
                                className=" object-cover object-[center_20%] "
                                fill
                                priority={index === 0 }
                                loading={index === 0 ? undefined : 'lazy'} 
                                decoding='async'/>
                                <div className="absolute bottom-0 w-full h-[20vh] bg-black/60 text-white flex items-center justify-center flex-col cursor-pointer" >
                                    <h2 className="text-xl md:text-3xl p-4 bg-slate-800/60 rounded-full " onClick={() => navigate.push(`/manga/${item.id}/${item.attributes.title.en || item.attributes.title["ja-ro"] || item.attributes.title.ja || "Not Title"}`)}>{truncate(item.attributes.title.en || item.attributes.title["ja-ro"] || item.attributes.title.ja || "No Title",68)}</h2>
                                    <p className="px-5 mt-2">{truncate(item.attributes.description.en || item.attributes.description.jp || "No Description")}</p>
                                    </div>
                            </li>
                        )})}
            
                        
                        

                    </ul>
                    <div className="button w-full h-full flex items-center justify-between flex-row px-5 md:px-20 text-white font-extrabold text-7xl absolute top-0 left-0 z-10">
                        <button 
                            className="rounded-full bg-indigo-950 h-24 w-24 md:h-32 md:w-32 flex items-center justify-center text-white text-4xl md:text-7xl font-extrabold transition-all duration-300"
                            onClick={PrevSlide}>
                            {<i className="fa-solid fa-arrow-left"></i>}
                        </button>
                        <button
                            className="rounded-full bg-indigo-950 h-24 w-24 md:h-32 md:w-32 flex items-center justify-center text-white text-4xl md:text-7xl font-extrabold transition-all duration-300"
                            onClick={NextSlide}>
                            {<i className="fa-solid fa-arrow-right"></i>}
                        </button>

                    </div>
                </div>
        </>
    )
}


export default Slide