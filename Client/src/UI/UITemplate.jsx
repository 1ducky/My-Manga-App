'use client'

import NavigationBar from "./NavBar"
import { SearchBox } from "./SearchBox"
import SideBar from "./SideBar"
import {  useEffect, useState } from "react"



export const UITemplate = () => {

    const [OpenSide,setopenSide] = useState(false)
    const [OpenSearchbox,setopenSearchBox] = useState(false) 

        const onMouseSide = () => setopenSide(prev => !prev)
        const onMouseSeacrchBox = () => setopenSearchBox(prev => !prev)

    return(
        <div className="w-screen">
            <NavigationBar onMenuClick={onMouseSide} onSearchBox={onMouseSeacrchBox}/>
            <SearchBox isOpen={OpenSearchbox}/>
            <SideBar isOpen={OpenSide} onMenuClick={onMouseSide}/>
        </div>
    )
}