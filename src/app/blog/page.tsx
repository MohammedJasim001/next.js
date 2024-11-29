'use client'
import { useRouter } from "next/navigation"

export default function Blog(){
    const router = useRouter()
    const handleClick = () =>{
        console.log('routing to the home page')
        router.push('/')
    }
    return (
        <>
            <h1>This is blog page</h1>
            <button onClick={handleClick}>Back to home</button>
        </>
    )

}