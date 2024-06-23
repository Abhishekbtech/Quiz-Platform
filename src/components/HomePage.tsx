import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div className="mt-20">
            <h1 className="text-[25px] text-center font-extrabold">Welcome To The Quiz Platform</h1>
            <div className="flex justify-center mt-10 gap-10">
                <button className="border p-2 pl-4 pr-4 bg-slate-600 text-white"><Link to={"/admin"}>Admin Page</Link></button>
                <button className="border p-2 pl-4 pr-4 bg-slate-600 text-white"><Link to={"/quiz"}>Quiz Page</Link></button>
            </div>
        </div>
    )
}

export default HomePage