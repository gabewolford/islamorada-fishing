import { Link } from "react-router-dom";
import wwsImage from '../../../assets/wws-image-home.png'

export default function PhotoRightInfoCard() {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row items-center gap-6 lg:gap-28 order-1 lg:mx-20 mb-16">
                <div className="flex order-1">
                    <img src={wwsImage} alt="Hero Image" />
                </div>
                <div className="flex flex-col lg:ml-20 order-0">
                    <h4 className="text-2xl md:text-3xl font-medium leading-7 mb-4 ">Meet us at World Wide Sportsman</h4>
                    <p className="text-sm md:text-base mb-4">Our fishing charters begin and end at World Wide Sportsman Bayside Marina, the finest full service marina in the Florida Keys. Learn more about our marina and where to stay any play while in town.</p>
                    <Link to="/visit-islamorada" className="text-white font-medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">Explore Islamorada</Link>
                </div>
             </div>
        </>
    )
}