import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <>
            <div className="mx-auto pt-36 pb-96 items-stretch max-w-7xl">
                <div className="flex flex-row items-center gap-6 h-[676px] lg:mx-5 ">
                    <div className="flex-column flex-start p-0 gap-6 w-full lg:w-3/6">
                        <h1 className="text-6xl text-cyan-666 order-0 mb-6">
                            Experience the ultimate Florida Keys fishing adventures.
                        </h1>
                        <h6 className="text-lg text-cyan-666 order-1 mb-6">
                            Fish with the experts of Islamorada in the backcounty waters of the Florida Bay or the offshore blue waters of the Gulf Stream.
                        </h6>
                        <Link to="/charters" className="text-white bg-cyan-420 rounded-3xl px-5 py-3.5">
                            View Fishing Charters
                        </Link>
                    </div>
                    <div className="border border-yellow-500 w-full lg:w-3/6">
                        picture
                    </div>
                </div>
            </div>
        </>
    )
}