import { Link } from "react-router-dom"
import heroImage from '../../../assets/hero-image-home.png'

export default function HeroCard() {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row items-center gap-6 order-1 mb-16 md:mx-6 lg:mx-20 md:pt-3">
                <div className="flex order-1">
                    <img src={heroImage} alt="Hero Image" />
                </div>
                <div className="flex flex-col order-0 mx-6 md:ml-0">
                    <h1 className="text-3xl lg:text-6xl mb-4 font-medium leading-tight">Experience the ultimate Florida Keys fishing adventures.</h1>
                    <h6 className="mb-4 lg:text-lg leading-normal">Fish with the experts of Islamorada in the backcountry waters of the Florida Bay or the offshore blue waters of the Gulf Stream.</h6>
                    <Link to="/charters" className="text-white font-medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">View Fishing Charters</Link>
                </div> 
            </div>
        </>
    )
}