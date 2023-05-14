import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <>
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-row align-items-center absolute top-24 mx-20 my-16 border border-red-500">
                <div className="flex flex-col items-start z-10 border border-orange-500 max-w-[740px]">
                    <h1 className="text-6xl font-medium leading-tight">Experience the ultimate Florida Keys fishing adventure in Islamorada.</h1>
                    <h6 className="text-lg leading-7 my-4">Fish with the experts of Islamorada in the backcountry waters of the Florida Bay or offshore blue water of the Gulf Stream.</h6>
                    <Link to="/charters">
                        <h5 className="text-lg font-bold leading-5 mt-2">View All Fishing Charters</h5>
                    </Link>
                </div>
                <div className="flex bg-gray-300 w-[550px] h-[550px] -mx-40">
                    
                </div>
            </div>
        </div>
            
        </>
    )
}