import { Link } from "react-router-dom"
import HeroCard from "../HomeComponents/HeroCard"
import CharterTypes from "../HomeComponents/CharterTypes"
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
                <HeroCard />
                <CharterTypes />


                <div className="flex flex-col md:flex-row items-center gap-6 order-1 mx-6 mb-16">
                    <div className="flex">
                        <img src={bookdirectlyImage} alt="Hero Image" />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-2xl leading-7 mb-4 ">Book directly with one of our local guides</h4>
                        <p className="text-sm mb-4">All of our guides are licensed captains with years of experience and local expertise. We welcome all experience levels, whether you’re a seasoned fly fisherman or a family looking to try something new.</p>
                        <Link to="/guides" className="text-white font-medium bg-cyan-420 rounded-3xl px-5 py-3.5 w-fit">Meet Our Guides</Link>
                    </div>
                </div>
                
                <div className="flex flex-col-reverse md:flex-row items-center gap-6 order-1 mx-6 mb-16">
                    <div className="flex order-1">
                        <img src={wwsImage} alt="Hero Image" />
                    </div>
                    <div className="flex flex-col order-0">
                        <h4 className="text-2xl leading-7 mb-4 ">Meet us at World Wide Sportsman</h4>
                        <p className="text-sm mb-4">Our fishing charters begin and end at World Wide Sportsman Bayside Marina, the finest full service marina in the Florida Keys. Learn more about our marina and where to stay any play while in town.</p>
                        <Link to="/visit-islamorada" className="text-white font-medium bg-cyan-420 rounded-3xl px-5 py-3.5 w-fit">Explore Islamorada</Link>
                    </div>
                </div>
                

                <div class="flex flex-col bg-white m-auto p-auto">
                    <h4 className="text-2xl text-center leading-7 mb-6 ">Our partners</h4>
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