import { Link } from "react-router-dom"
import heroImage from '../../assets/hero-image-home.png'
import backcountryImage from '../../assets/backcountry-image-home.png'
import offshoreImage from '../../assets/offshore-image-home.png'
import ecotoursImage from '../../assets/ecotours-image-home.png'
import bookdirectlyImage from '../../assets/book-directly-image-home.png'
import wwsImage from '../../assets/wws-image-home.png'
import bassproImage from '../../assets/basspro.png'
import grassyflatsImage from '../../assets/grassyflats.png'
import amaracayImage from '../../assets/amaracay.png'
import tarpontrustImage from '../../assets/tarpontrust.png'
import evergladescoalitionImage from '../../assets/evergladescoalition.png'
import charterboatassocImage from '../../assets/charterboatassoc.png'
import keysfishingguidesImage from '../../assets/keysfishingguidesassoc.png'

export default function HomePage() {
    return (
        <>
            <div className="mx-auto pt-14">
                <div className="flex flex-col-reverse md:flex-row items-center gap-6 order-1 mb-16">
                    <div className="flex order-1">
                        <img src={heroImage} alt="Hero Image" />
                    </div>
                    <div className="flex flex-col mx-6 order-0">
                        <h1 className="text-3xl mb-4 font-medium leading-tight">Experience the ultimate Florida Keys fishing adventures.</h1>
                        <h6 className="mb-4 leading-normal">Fish with the experts of Islamorada in the backcountry waters of the Florida Bay or the offshore blue waters of the Gulf Stream.</h6>
                        <Link to="/charters" className="text-white font-medium bg-cyan-420 rounded-3xl px-5 py-3.5 w-fit">View Fishing Charters</Link>
                    </div>
                </div>

                <div className="mx-6 mb-16">
                    <h1 className="text-2xl mb-6">Types of charters</h1>
                    <div className="flex flex-row items-center gap-4 mb-6">
                        <img className=" w-32 h-32 bg-cover bg-no-repeat bg-center flex-none" src={backcountryImage}/>
                        <div className="flex flex-col items-start gap-2">
                            <h4 className="text-base font-medium">Backcountry & Inshore</h4>
                            <p className="text-sm">Snook, redfish, tarpon and more</p>
                            <Link to="/inshore-backcountry" className="text-cyan-420 text-sm font-medium">Explore Inshore</Link>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4 mb-6">
                        <img className="w-32 h-32 bg-cover bg-no-repeat bg-center flex-none" src={offshoreImage}/>
                        <div className="flex flex-col items-start gap-2">
                            <h4 className="text-base font-medium">Reef & Offshore</h4>
                            <p className="text-sm">Sailfish, wahoo, tuna and more</p>
                            <Link to="/offshore" className="text-cyan-420 text-sm font-medium">Explore Offshore</Link>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-4 mb-6">
                        <img className="w-32 h-32 bg-cover bg-no-repeat bg-center flex-none" src={ecotoursImage}/>
                        <div className="flex flex-col items-start gap-2">
                            <h4 className="text-base font-medium">Eco & Enviro Tours</h4>
                            <p className="text-sm">Backcountry and beach trips</p>
                            <Link to="/eco-enviro-tours" className="text-cyan-420 text-sm font-medium">Explore Eco Tours</Link>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col items-start gap-6 mx-6 mb-16">
                    <div className="flex">
                        <img src={bookdirectlyImage} alt="Hero Image" />
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h4 className="text-2xl leading-7">Book directly with one of our local guides</h4>
                        <p className="text-sm">All of our guides are licensed captains with years of experience and local expertise. We welcome all experience levels, whether you’re a seasoned fly fisherman or a family looking to try something new.</p>
                        <Link to="/guides" className="text-white font-medium bg-cyan-420 rounded-3xl px-5 py-3.5 w-fit">Meet Our Guides</Link>
                    </div>
                </div>
                
                <div className="flex flex-col items-start gap-6 mx-6 mb-16">
                    <div className="flex">
                        <img src={wwsImage} alt="Hero Image" />
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h4 className="text-2xl leading-7">Meet us at World Wide Sportsman</h4>
                        <p className="text-sm">Our fishing charters begin and end at World Wide Sportsman Bayside Marina, the finest full service marina in the Florida Keys. Learn more about our marina and where to stay any play while in town.</p>
                        <Link to="/visit-islamorada" className="text-white font-medium bg-cyan-420 rounded-3xl px-5 py-3.5 w-fit">Explore Islamorada</Link>
                    </div>
                </div>

                <div class="flex flex-col bg-white m-auto p-auto">
                    <h4 className="text-2xl text-center leading-7 mb-6 ">Featured partners</h4>
                        <div class="flex overflow-x-scroll mx-6 hide-scroll-bar">
                            <div class="flex flex-nowrap gap-6 pb-6">
                                <div class="inline-block px-3">
                                    <div class="w-16 h-16 overflow-hidden">
                                        <img src={bassproImage} alt="Bass Pro Shops" />
                                    </div>
                                </div>
                                
                                <div class="inline-block px-3">
                                    <div class="w-16 h-16 overflow-hidden">
                                        <img src={grassyflatsImage} alt="Grassy Flats" />
                                    </div>
                                </div>
                                
                                <div class="inline-block px-3">
                                    <div class="w-16 h-16 overflow-hidden">
                                        <img src={amaracayImage} alt="Amara Cay Resort" />
                                    </div>
                                </div>

                                <div class="inline-block px-3">
                                    <div class="w-16 h-16 overflow-hidden">
                                        <img src={tarpontrustImage} alt="Bonefish & Tarpon Trust" />
                                    </div>
                                </div>

                                <div class="inline-block px-3">
                                    <div class="w-16 h-16 overflow-hidden">
                                        <img src={evergladescoalitionImage} alt="Everglades Coalition" />
                                    </div>
                                </div>

                                <div class="inline-block px-3">
                                    <div class="w-16 h-16 overflow-hidden">
                                        <img src={charterboatassocImage} alt="Islamorada Charter Boat Association" />
                                    </div>
                                </div>

                                <div class="inline-block px-3">
                                    <div class="w-16 h-16 overflow-hidden">
                                        <img src={keysfishingguidesImage} alt="Florida Keys Fishing Guides Association" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/partners" className="text-center text-cyan-420 font-medium">View All</Link>
                    </div>


            </div>
        </>
    )
}