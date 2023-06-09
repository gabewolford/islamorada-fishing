import { Link } from "react-router-dom"
import backcountryImage from '../../../assets/backcountry-image-home.png'
import offshoreImage from '../../../assets/offshore-image-home.png'
import ecotoursImage from '../../../assets/ecotours-image-home.png'

export default function CharterTypes() {


    return (
        <>
            <div className="mx-6 lg:mx-20 mb-16">
                    <h2 className="text-2xl medium mb-6">Types of charters</h2>
                    <div className="flex flex-col md:flex-row md:grid md:grid-cols-3 md:flex-wrap md:gap-6 items-center self-stretch">
                        <div className="flex items-center md:flex-col self-stretch mb-6 gap-4">
                            <div className="w-2/5 md:w-auto">
                                <img className="w-full h-full" src={backcountryImage} alt="backcountry"/>
                            </div>
                            <div className="flex flex-col items-start w-3/5 md:w-full gap-2">
                                <h3 className="text-base md:text-lg medium">Backcountry & Inshore</h3>
                                <p className="text-md">Snook, redfish, tarpon and more</p>
                                <Link to="/charters/inshore-backcountry" className="text-cyan-420 hover:text-cyan-hover transition duration-100 ease-in-out text-md medium">Explore Inshore</Link>
                            </div>
                        </div>
                        <div className="flex items-center md:flex-col self-stretch mb-6 gap-4">
                            <div className="w-2/5 md:w-auto">
                                <img className="w-full h-full" src={offshoreImage} alt="offshore"/>
                            </div>
                            <div className="flex flex-col items-start w-3/5 md:w-full gap-2">
                                <h3 className="text-base md:text-lg medium">Reef & Offshore</h3>
                                <p className="text-md">Sailfish, wahoo, tuna and more</p>
                                <Link to="/charters/offshore" className="text-cyan-420 hover:text-cyan-hover transition duration-100 ease-in-out text-md medium">Explore Offshore</Link>
                            </div>
                        </div>
                        <div className="flex items-center md:flex-col self-stretch md:mb-6 gap-4">
                            <div className="w-2/5 md:w-auto">
                                <img className="w-full h-full" src={ecotoursImage} alt="eco/enviro"/>
                            </div>
                            <div className="flex flex-col items-start w-3/5 md:w-full gap-2">
                                <h3 className="text-base md:text-lg medium">Eco & Enviro Tours</h3>
                                <p className="text-md">Backcountry and beach trips</p>
                                <Link to="/charters/eco-enviro-tours" className="text-cyan-420 hover:text-cyan-hover transition duration-100 ease-in-out text-md medium">Explore Eco Tours</Link>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}