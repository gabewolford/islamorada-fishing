import { Link } from 'react-router-dom'
import wwsImage from '../../assets/wws-image-home.png'


export default function VisitPage() {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-24">
                <div className="mx-6 lg:mx-20 mb-16">
                    <h1 className="text-3xl font-medium mb-6">Visit Islamorada</h1>
                    <div className="flex flex-col md:flex-row md:grid md:grid-cols-3 md:flex-wrap md:gap-6 items-center self-stretch">
                        <div className="flex items-center md:flex-col self-stretch mb-6 gap-4">
                            <div className="w-2/5 md:w-auto">
                                <img src={wwsImage} />
                            </div>
                            <div className="flex flex-col items-start w-3/5 md:w-full gap-2">
                                <h4 className="text-base md:text-lg font-medium">World Wide Sportsman</h4>
                                <p className="text-sm">Snook, redfish, tarpon and more</p>
                                <Link to="/charters/inshore-backcountry" className="text-cyan-420 hover:text-cyan-hover transition duration-100 ease-in-out text-sm font-medium">Explore Inshore</Link>
                            </div>
                        </div>
                        <div className="flex items-center md:flex-col self-stretch mb-6 gap-4">
                            <div className="w-2/5 md:w-auto">
                                <img src={wwsImage} />
                            </div>
                            <div className="flex flex-col items-start w-3/5 md:w-full gap-2">
                                <h4 className="text-base md:text-lg font-medium">Stay</h4>
                                <p className="text-sm">Sailfish, wahoo, tuna and more</p>
                                <Link to="/charters/offshore" className="text-cyan-420 hover:text-cyan-hover transition duration-100 ease-in-out text-sm font-medium">Explore Offshore</Link>
                            </div>
                        </div>
                        <div className="flex items-center md:flex-col self-stretch md:mb-6 gap-4">
                            <div className="w-2/5 md:w-auto">
                                <img src={wwsImage} />
                            </div>
                            <div className="flex flex-col items-start w-3/5 md:w-full gap-2">
                                <h4 className="text-base md:text-lg font-medium">Play</h4>
                                <p className="text-sm">Backcountry and beach trips</p>
                                <Link to="/charters/eco-enviro-tours" className="text-cyan-420 hover:text-cyan-hover transition duration-100 ease-in-out text-sm font-medium">Explore Eco Tours</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}