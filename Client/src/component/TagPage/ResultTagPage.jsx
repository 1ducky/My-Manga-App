import FetchSearchTag from "@/API/Fetchmangas/FetchGenre"
import Link from "next/link"
import Image from "next/image"


export default function ResultTagPage ({UID,Page,Name}) {
    console.log(UID + 'component' + Page)

    const Limit=20
    const Offset = Limit*Page
    const {Mangas,Total} = FetchSearchTag(Limit,UID,Offset)
    const TotalPages=Math.min(Math.ceil(Total/Limit),10000/Limit)

    return(
        <>
            <div className="w-screen pt-28 pb-32 text-white flex items-center justify-center">
                <div className="flex flex-col gap-5 gap-y-32 items-center justify-center w-full">
                    <h2>Result {Name} {UID} </h2>
                    <ul className="w-full grid grid-cols-[repeat(auto-fit,_minmax(280px,auto))]  gap-x-2 gap-y-14  justify-items-center after:justify-start text-white transform-gpu will-change-transform" >
                        {Mangas.map ((Manga,index) => {
                        
                        const coverRel = Manga.relationships.find((rel) => rel.type === "cover_art");
                        const fileName = coverRel?.attributes?.fileName;
                        const FetchCover = fileName? `https://uploads.mangadex.org/covers/${Manga.id}/${fileName}.256.jpg` : null;
                                    


                                return(

                                    <li className="w-60 flex flex-col py-5 gap-2 h-96 cursor-pointer" key={Manga.id} >
                                        {FetchCover ? 
                                            <Image 
                                            src={FetchCover} 
                                            alt={Manga.attributes.title.en || Manga.attributes.title["ja-ro"] || "Not Title"} 
                                             
                                            width={240}
                                            height={320}
                                            loading={index >= 11 ? undefined : "lazy"}  
                                            decoding="async"
                                            />

                                            : <div className="w-full h-80 object-cover rounded-md bg-sky-900"></div>
                                        }
                                        <h2 className="text-white text-center text-wrap">{Manga.attributes.title.en || Manga.attributes.title["ja-ro"] || "Not Title"}</h2>
                                    </li>

                                )
                            })}

                    </ul>
                    {/* Pagination */}
                    <div className="p-5 flex flex-wrap gap-5 text-white mt-32 items-center">
                        {Page===0 ? null : <Link href={`/list/${Name.toLowerCase().replace(/ /g,"-")}?page=${Page}`} className="bg-indigo-900 p-2 rounded-full">Previus</Link>}

                        {
                            Array.from({ length:TotalPages }).map((_,i) =>(
                            i >= Page -2 && i <= Page +2 ? (
                                            <li key={i} className="list-none">
                                                <Link href={`/list/${Name.toLowerCase().replace(/ /g,'-')}?page=${i+1}`} className="bg-indigo-900 p-2 rounded-full w-10 h-10 text-center">{i+1}</Link>
                                            </li>
                                                        ) : null
                            ))
                        }
                        {
                            Page+1 >= TotalPages-2 ? null : (
                                <>
                                    <button className="bg-indigo-900 p-2 rounded-full w-10">...</button>
                                    
                                        <Link href={`/list/${Name.toLowerCase().replace(/ /g,'-')}?page=${TotalPages}`}  className="bg-indigo-900 p-2 rounded-full w-10">{TotalPages}</Link>
                                    
                                    
                                </>
                                
                            )
                        }

                        {Page+1 === TotalPages ? null : <Link href={`/list/${Name.toLowerCase().replace(/ /g,'-')}?page=${Page+2}`} className="bg-indigo-900 p-2 rounded-full">Next</Link>}
                    </div>
                </div>
            </div>
        </>
    )
}