export default function Card({children}:{children:React.ReactNode}){
    return <div className="p-[100px] m-[10px] shadow-md border-blue-400 flex justify-center items-center w-[400px]" >{children}</div>
}