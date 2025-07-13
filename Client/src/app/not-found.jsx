import Link from "next/link"

export default function NotFound () {
    
    return(
        <>
            <div className="w-screen h-[80vh] text-white flex justify-center items-center flex-col ">
                <div className="box w-[80%] h-[40vh] bg-indigo-950 flex items-center justify-center flex-col rounded-3xl">
                    <h1 className="text-7xl">404</h1>
                    <h3>Page Not Found</h3>
                    <Link href={'/'}>
                        <button className="p-3 bg-sky-800 rounded-full mt-3">Retrun Home</button>
                    </Link>
                </div>
                
            </div>
        </>
    )
}
