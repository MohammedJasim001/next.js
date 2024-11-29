'use client'
import Link from "next/link"
import { useState } from "react"

export default function AuthLayout({children}:{
    children:React.ReactNode
}){
     const [input,setInput] = useState('')
    return (

        <>
        {children}
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" className="border-black bg-green-700"/>
        <h1 className="bg-red-800">the layout of login and registratrion</h1>
        <Link href='login'>Login</Link>
        <Link href = "register">Register</Link>
        </>
    )
}