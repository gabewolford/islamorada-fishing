import { Link } from "react-router-dom"
import sandbarImage from '../../../../assets/sandbar.png'

export default function PhotoRightCard2() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mb-16">
                <img className="md:w-1/2 md:order-1" src={sandbarImage} alt="Sandbar Image" />
                <div className="flex flex-col md:order-0 lg:ml-20">
                    <h4 className="text-2xl md:text-3xl font-medium leading-7 mb-4 ">The Sandbar & Alligator Lighthouse</h4>
                    <p className="text-sm md:text-base mb-2">This tour is fun for all ages. Take a short ride to the famous Islamorada sandbar where you can relax and play all day in the warm shallow water.  On the weekend, this is where the party happens.</p>
                    <p className="text-sm md:text-base mb-4">Visit the Alligator Lighthouse a few minutes farther from shore. The gorgeous turquoise water makes it a great place swim and snorkel.</p>
                    <p className="text-sm md:text-base font-bold mb-4">Availability: All year</p>
                    <p className="text-xs mb-6">Rates vary depending on the boat and number of people.</p>
                    <Link to="/charters/contact" className="text-white font-medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">Book A Charter</Link>
                </div>
            </div>
        </>
    )
}