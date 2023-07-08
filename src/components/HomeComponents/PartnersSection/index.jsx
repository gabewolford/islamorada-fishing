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
            <div className="fade-in flex flex-col items-center mx-6 lg:mx-20 gap-6 pb-10 md:pb-6">
                <h3 className="text-2xl lg:text-3xl medium mb-2">Featured partners</h3>
                <div className="flex flex-row justify-center gap-12">
                    <div className="w-1/3 md:w-1/6 lg:w-{1/7}">
                        <img src={bassproImage} className="w-full h-full" alt="Bass Pro Shops" loading="lazy" />
                    </div>
                    <div className="w-1/3 md:w-1/6 lg:w-{1/7}">
                        <img src={grassyflatsImage} className="w-full h-full" alt="Grassy Flats" loading="lazy" />
                    </div>
                    <div className="w-1/3 md:w-1/6 lg:w-{1/7}">
                        <img src={amaracayImage} className="w-full h-full" alt="Amara Cay Resort" loading="lazy" />
                    </div>
                    <div className="hidden md:inline-block md:w-1/6 lg:w-{1/7}">
                        <img src={tarpontrustImage} className="w-full h-full" alt="Bonefish & Tarpon Trust" loading="lazy" />
                    </div>
                    <div className="hidden md:inline-block md:w-1/6 lg:w-{1/7}">
                        <img src={evergladescoalitionImage} className="w-full h-full" alt="Everglades Coalition" loading="lazy" />
                    </div>
                    <div className="hidden lg:inline-block md:w-1/6 lg:w-{1/7}">
                        <img src={charterboatassocImage} className="w-full h-full" alt="Islamorada Charter Boat Association" loading="lazy"  />
                    </div>
                    <div className="hidden lg:inline-block md:w-1/6 lg:w-{1/7}">
                        <img src={keysfishingguidesImage} className="w-full h-full" alt="Florida Keys Fishing Guides Association" loading="lazy" />
                    </div>
                </div>
                <div>
                    <Link to="/partners" className="text-cyan-420 hover:text-cyan-hover transition duration-100 ease-in-out text-base medium">View All</Link>
                </div>
            </div>
        </>
    )
}