import { Link } from "react-router-dom";
import wwsImage from '../../../assets/wws-image-home.png'
import { useEffect } from "react";

export default function PhotoRightInfoCard() {

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
            <div className="fade-in flex flex-col-reverse md:flex-row items-center gap-6 lg:gap-32 order-1 mx-6 lg:mx-20 mb-16">
                <div className="flex md:w-1/2 order-1">
                    <img src={wwsImage} className="w-full h-full" alt="Hero Image" />
                </div>
                <div className="flex flex-col md:w-1/2 lg:ml-20 order-0">
                    <h4 className="text-2xl md:text-3xl font-medium leading-7 mb-4 ">Meet us at World Wide Sportsman</h4>
                    <p className="text-sm md:text-base mb-4">Our fishing charters begin and end at World Wide Sportsman Bayside Marina, the finest full service marina in the Florida Keys. Learn more about our marina and where to stay any play while in town.</p>
                    <Link to="/explore-islamorada" className="text-white font-medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">Explore Islamorada</Link>
                </div>
             </div>
        </>
    )
}