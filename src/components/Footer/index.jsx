import { Link } from "react-router-dom"
import facebookLogo from '../../assets/facebook.png'
import instagramLogo from '../../assets/instagram.png'
import waterImage from '../../assets/water.png'

export default function Footer() {
    return (
        <>
            <footer className="w-full mx-auto bg-cyan-69 absolute bottom-0">
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="relative w-full">
                        <img className='h-[350px] w-full' src={waterImage} alt="Contact Us" />
                    </div>
                    <div className="absolute px-6 lg:px-44 flex flex-col text-center">
                        <h4 className="text-2xl md:text-3xl text-white font-medium mb-4">Plan your custom fishing charter with our help.</h4>
                        <h6 className="text-base md:text-lg text-white mb-4">Not sure which charter or guide is right for you? Have questions? Talk with our experts who will help you plan and book your perfect Florida Keys fishing trip today!</h6>
                        <Link to="/contact" className="text-cyan-420 font-medium bg-white hover:bg-cyan-hover hover:text-white transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 block w-fit mx-auto">Contact Us</Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-10 sm:px-6 lg:px-8">
                    <div className="col-span-full lg:col-span-1">
                        <Link className="flex-none text-xl text-muted-420 font-semibold " to="/" aria-label="Brand">logo</Link>
                    </div>
                    <div className="grid space-y-3 text-sm">
                        <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" to="/charters">Fishing Charters</Link></p>
                        <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" to="/charters/inshore-backcountry">Backcountry & Inshore</Link></p>
                        <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" to="/charters/offshore">Reef & Offshore</Link></p>
                        <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" to="/charters/eco-enviro-tours">Eco & Enviro Tours</Link></p>
                    </div>
                    <div className="grid space-y-3 text-sm">
                        <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" to="/guides">Guides</Link></p>
                        <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" to="/explore-islamorada">Explore Islamorada</Link></p>
                        <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" to="/frequently-asked-questions">FAQs</Link></p>
                        <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" to="/partners">Our Partners</Link></p>
                    </div>
                    <div className="col-span-full lg:col-span-1 grid space-y-3 text-sm">
                        <p><Link className="inline-flex gap-x-2 text-white hover:text-cyan-420" to="/contact">Contact Us</Link></p>
                        <p className="inline-flex gap-x-2 text-white">Call us today <span className="text-white font-bold">305-394-7484</span></p>
                        <p className="inline-flex gap-x-2 text-white"> 
                            <a href="https://www.facebook.com/islamoradafishingguidesandcharters" className="mr-2"><span><img src={facebookLogo}/></span></a>
                            <a href="https://www.instagram.com/islamoradafishingguides/"><span><img src={instagramLogo}/></span></a>
                        </p>
                    </div>
                    <div className="col-span-full col-span-2">
                        <p className="mt-3 text-xs text-muted-420">© 2023 IslamoradaFishingGuidesandCharters. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}