'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"
import FetchLastestMangas from "@/API/Fetchmangas/FetchLastestMangas"



const LastestSlide = () => {
    const {Mangas ,isFound} = FetchLastestMangas(20,10)
    const navigate=useRouter()

    const truncate = (text,limit=60) => {
        return(text.length > limit ? text.substring(0,limit)+'...' : text )   
    }
    return(
        <>  {console.log(isFound)}
            <div className="w-full mt-16 py-2 text-white">
                <h2 className="m-4 text-xl ">Lastest Update Mangas</h2>
                <ul className="flex flex-row gap-4 w-full py-6 px-5 overflow-x-auto whitespace-nowrap transform-gpu will-change-transform Scrollbar-transparent">
                    {Mangas.map ((Manga,index) => {
                        const CoveRel=Manga.relationships.find((ref) => ref.type ===  'cover_art')
                        const FileName=CoveRel?.attributes?.fileName
                        const FetchCover= FileName ? `https://uploads.mangadex.org/covers/${Manga.id}/${FileName}.256.jpg` : null


                        return(

                            <li className="h-96 w-52 flex-shrink-0 lazy-card"  key={Manga.id} onClick={() => navigate.push(`/manga/${Manga.id}/${Manga.attributes.title.en || Manga.attributes.title["ja-ro"] || "Not Title"}`.replace(/ /g,'-'))}>
                                <Image
                                src={FetchCover} 
                                alt={Manga.attributes.title.en || Manga.attributes.title["ja-ro"] || "Not Title"}
                                 className="w-full h-80 object-cover rounded-md cursor-pointer" 
                                loading={index === 0 ? undefined : 'lazy'} 
                                decoding="async"
                                priority={index === 0}
                                width={100}
                                height={320}
                                

                                
                                />
                                
                                <h2 className="text-white text-center text-wrap">{truncate(Manga.attributes.title.en || Manga.attributes.title["ja-ro"] || "Not Title")}</h2>
                            </li>

                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default LastestSlide