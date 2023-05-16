import { Link } from "react-router-dom"
import backcountryImage from '../../../assets/backcountry-image-home.png'
import offshoreImage from '../../../assets/offshore-image-home.png'
import ecotoursImage from '../../../assets/ecotours-image-home.png'

export default function CharterTypes() {
    return (
        <>
            <div className="mx-6 mb-16">
                    <h1 className="text-2xl mb-6">Types of charters</h1>
                    <div className="flex flex-col md:flex-row md:grid md:grid-cols-3 md:flex-wrap md:gap-6 items-center self-stretch">
                        <div className="flex items-center md:flex-col self-stretch mb-6 gap-4">
                            <div className="w-2/5 md:w-auto">
                                <img className="" src={backcountryImage} />
                            </div>
                            <div className="flex flex-col items-start w-3/5 md:w-full gap-2">
                                <h4 className="text-base md:text-lg font-medium">Backcountry & Inshore</h4>
                                <p className="text-sm">Snook, redfish, tarpon and more</p>
                                <Link to="/inshore-backcountry" className="text-cyan-420 text-sm font-medium">Explore Inshore</Link>
                            </div>
                        </div>
                        <div className="flex items-center md:flex-col self-stretch mb-6 gap-4">
                            <div className="w-2/5 md:w-auto">
                                <img className="" src={offshoreImage} />
                            </div>
                            <div className="flex flex-col items-start w-3/5 md:w-full gap-2">
                                <h4 className="text-base md:text-lg font-medium">Reef & Offshore</h4>
                                <p className="text-sm">Sailfish, wahoo, tuna and more</p>
                                <Link to="/offshore" className="text-cyan-420 text-sm font-medium">Explore Offshore</Link>
                            </div>
                        </div>
                        <div className="flex items-center md:flex-col self-stretch md:mb-6 gap-4">
                            <div className="w-2/5 md:w-auto">
                                <img className="" src={ecotoursImage} />
                            </div>
                            <div className="flex flex-col items-start w-3/5 md:w-full gap-2">
                                <h4 className="text-base md:text-lg font-medium">Eco & Enviro Tours</h4>
                                <p className="text-sm">Backcountry and beach trips</p>
                                <Link to="/eco-enviro-tours" className="text-cyan-420 text-sm font-medium">Explore Eco Tours</Link>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}