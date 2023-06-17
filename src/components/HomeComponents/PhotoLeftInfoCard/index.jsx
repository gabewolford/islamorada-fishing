import { Link } from "react-router-dom";
import bookdirectlyImage from '../../../assets/book-directly-image-home.png'
import { useEffect } from "react";

export default function PhotoLeftInfoCard() {

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
            <div className="fade-in flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mx-6 lg:mx-20 mb-16">
                <div className="flex">
                    <img src={bookdirectlyImage} className="w-full h-full" alt="Hero Image" />
                </div>
                <div className="flex flex-col lg:mr-20">
                    <h4 className="text-2xl md:text-3xl font-medium leading-7 mb-4 ">Book directly with one of our local guides</h4>
                    <p className="text-sm md:text-base mb-4">All of our guides are licensed captains with years of experience and local expertise. We welcome all experience levels, whether you’re a seasoned fly fisherman or a family looking to try something new.</p>
                    <Link to="/guides" className="text-white font-medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">Meet Our Guides</Link>
                </div>
            </div>
        </>
    )
}