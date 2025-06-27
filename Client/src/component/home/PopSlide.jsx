'use client'

import { FetchPopMangas } from "@/API/Fetchmangas/FetchPopMangas"
import { useRouter } from "next/navigation"
import Image from "next/image"



const PopSlide= () => {
    const { Mangas }=FetchPopMangas(20,0)
    const navigate=useRouter()

    const truncate = (text,limit=60) => {
        return(text.length > limit ? text.substring(0,limit)+'...' : text )   
    }
    return(
        <div className="w-full mt-16 py-2 text-white">
            <h2 className="text-xl m-4">Most Populer Mangas</h2>
            <ul className="flex flex-row gap-5 w-full py-6 px-5 overflow-x-auto whitespace-nowrap transform-gpu will-change-transform Scrollbar-transparent">
                {Mangas.map((Manga,index) => {
                    const CoverRel=Manga.relationships.find((ref) => ref.type === 'cover_art')
                    const FileName=CoverRel?.attributes?.fileName
                    const FetchCover = FileName ? `https://uploads.mangadex.org/covers/${Manga.id}/${FileName}.256.jpg` : null
                    return(
                        <li className="h-96 w-52 flex-shrink-0 lazy-card" key={Manga.id} onClick={() => navigate.push(`/manga/${Manga.id}/${Manga.attributes.title.en || Manga.attributes.title["ja-ro"] || "Not Title"}`.replace(/ /g,'-'))} >
                            
                            <Image
                            src={FetchCover} 
                            alt={Manga.attributes.title.en || Manga.attributes.title["ja-ro"] || "No Title"}
                             className="w-full h-80 object-cover rounded-md cursor-pointer" 
                            loading={index === 0  ? undefined : 'lazy'} 
                            decoding="async"
                            width={100}
                            height={320}
                            />
                        
                            <h2 className="text-center text-wrap">{truncate(Manga.attributes.title.en || Manga.attributes.title["ja-ro"] || "No Title")}</h2>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PopSlide