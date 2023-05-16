import { Link } from "react-router-dom"
import tarponImage from '../../../../assets/tarpon.png'

export default function PhotoLeftCard1() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mb-16">
                <img className="md:w-1/2" src={tarponImage} alt="Tarpon Image" />
                <div className="flex flex-col items-start lg:mr-20">
                    <h4 className="text-2xl md:text-3xl font-medium leading-7 mb-4 ">Tarpon</h4>
                    <p className="text-sm md:text-base mb-2">Also known as the Silver King, the Tarpon is known to jump and put on a memorable show. These fish have an impressive fight that will challenge any angler.</p>
                    <p className="text-sm md:text-base mb-4">Tarpon season begins in March when large traveling fish begin to come through. April, May, and June are the peak time with the season winding down in July and August. Although Tarpon fishing is best in the spring, smaller local fish can be caught year-round.</p>
                    <p className="text-sm md:text-base font-bold mb-4">Availability: March through August</p>
                    <p className="text-xs mb-6">Rates vary depending on the boat and number of people.</p>
                    <Link to="/contact" className="text-white font-medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">Book A Charter</Link>
                </div>
            </div>
        </>
    )
}