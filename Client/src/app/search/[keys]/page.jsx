'use client'

import { useParams } from "next/navigation";


export default function SearchPage () {
    const {keys} = useParams()


    return <h2> {keys} </h2>
}