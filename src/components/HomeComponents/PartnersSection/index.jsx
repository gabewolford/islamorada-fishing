import { Link } from "react-router-dom";
import bassproImage from '../../../assets/partners/basspro.png'
import grassyflatsImage from '../../../assets/partners/grassyflats.png'
import amaracayImage from '../../../assets/partners/amaracay.png'
import tarpontrustImage from '../../../assets/partners/tarpontrust.png'
import evergladescoalitionImage from '../../../assets/partners/evergladescoalition.png'
import charterboatassocImage from '../../../assets/partners/charterboatassoc.png'
import keysfishingguidesImage from '../../../assets/partners/keysfishingguidesassoc.png'
import { useEffect } from "react";

export default function PartnersSection() {

    useEffect(() => {
        const cards = document.querySelectorAll('.fade-in')
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('show', entry.isIntersecting)
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target)
                }
            })
        },
        {
            threshold: .25,
        }
        )
    
        cards.forEach(card => {
            observer.observe(card)
        })
    }, [])

    return (
        <>
            <div className="fade-in flex flex-col items-center mx-6 lg:mx-20 gap-6">
                <h3 className="text-2xl lg:text-3xl font-medium mb-2">Featured partners</h3>
                <div className="flex flex-row justify-center gap-12">
                    <div className="w-1/3 md:w-1/6 lg:w-{1/7}">
                        <img src={bassproImage} alt="Bass Pro Shops" />
                    </div>
                    <div className="w-1/3 md:w-1/6 lg:w-{1/7}">
                        <img src={grassyflatsImage} alt="Grassy Flats" />
                    </div>
                    <div className="w-1/3 md:w-1/6 lg:w-{1/7}">
                        <img src={amaracayImage} alt="Amara Cay Resort" />
                    </div>
                    <div className="hidden md:inline-block md:w-1/6 lg:w-{1/7}">
                        <img src={tarpontrustImage} alt="Bonefish & Tarpon Trust" />
                    </div>
                    <div className="hidden md:inline-block md:w-1/6 lg:w-{1/7}">
                        <img src={evergladescoalitionImage} alt="Everglades Coalition" />
                    </div>
                    <div className="hidden lg:inline-block md:w-1/6 lg:w-{1/7}">
                        <img src={charterboatassocImage} alt="Islamorada Charter Boat Association" />
                    </div>
                    <div className="hidden lg:inline-block md:w-1/6 lg:w-{1/7}">
                        <img src={keysfishingguidesImage} alt="Florida Keys Fishing Guides Association" />
                    </div>
                </div>
                <div>
                    <Link to="/partners" className="text-cyan-420 hover:text-cyan-hover transition duration-100 ease-in-out text-base font-medium">View All</Link>
                </div>
            </div>
        </>
    )
}