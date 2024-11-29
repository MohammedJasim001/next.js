import { Metadata } from "next"
export const metadata:Metadata={
    // title:'about'
    title:{
        absolute:'about'
    }
}

export default function About (){{
    return <h1>This is about page</h1>
}}