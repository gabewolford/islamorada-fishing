import { Link } from "react-router-dom"
import facebookLogo from '../../assets/facebook.png'
import instagramLogo from '../../assets/instagram.png'

export default function Footer() {
    return (
        <>
            <footer className="w-full p-10 px-4 sm:px-6 lg:px-8 mx-auto bg-cyan-69 absolute bottom-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="col-span-full lg:col-span-1">
                        <Link className="flex-none text-xl text-muted-420 font-semibold " to="/" aria-label="Brand">logo</Link>
                    </div>
                    <div className="mt-3 grid space-y-3 text-sm">
                        <p><Link className="inline-flex gap-x-2 text-white" to="/charters">Fishing Charters</Link></p>
                        <p><Link className="inline-flex gap-x-2 text-white" to="/charters/inshore-backcountry">Backcountry & Inshore</Link></p>
                        <p><Link className="inline-flex gap-x-2 text-white" to="/charters/offshore">Reef & Offshore</Link></p>
                        <p><Link className="inline-flex gap-x-2 text-white" to="/charters/eco-enviro-tours">Eco & Enviro Tours</Link></p>
                    </div>
                    <div className="mt-3 grid space-y-3 text-sm">
                        <p><Link className="inline-flex gap-x-2 text-white" to="/guides">Guides</Link></p>
                        <p><Link className="inline-flex gap-x-2 text-white" to="/visit-islamorada">Explore Islamorada</Link></p>
                        <p><Link className="inline-flex gap-x-2 text-white" to="/frequently-asked-questions">FAQs</Link></p>
                        <p><Link className="inline-flex gap-x-2 text-white" to="/partners">Our Partners</Link></p>
                    </div>
                    <div className="col-span-full lg:col-span-1 mt-3 grid space-y-3 text-sm">
                        <p><Link className="inline-flex gap-x-2 text-white" to="/contact">Contact Us</Link></p>
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