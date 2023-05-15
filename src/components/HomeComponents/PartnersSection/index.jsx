import { Link } from "react-router-dom";
import bassproImage from '../../../assets/basspro.png'
import grassyflatsImage from '../../../assets/grassyflats.png'
import amaracayImage from '../../../assets/amaracay.png'
import tarpontrustImage from '../../../assets/tarpontrust.png'
import evergladescoalitionImage from '../../../assets/evergladescoalition.png'
import charterboatassocImage from '../../../assets/charterboatassoc.png'
import keysfishingguidesImage from '../../../assets/keysfishingguidesassoc.png'

export default function PartnersSection() {
    return (
        <>
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
        </>
    )
}