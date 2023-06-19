import { Link } from "react-router-dom"
import checchaImg from '../../../assets/checca.png'
import { useEffect } from "react"

export default function PhotoRightCard2() {

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
            <div className="fade-in flex flex-col md:flex-row items-center gap-6 lg:gap-28 order-1 mb-16">
                <img className="md:w-1/2 md:order-1" src={checchaImg} alt="Checca Lodge Image" />
                <div className="flex flex-col md:order-0 lg:ml-20">
                    <h4 className="text-2xl md:text-3xl font-medium leading-7 mb-4 ">Stay</h4>
                    <p className="text-sm md:text-base mb-4">Need a place to stay? We partner with some of Islamorada's finest resorts to ensure your stay is nothing short of amazing.</p>
                    <Link to="/explore-islamorada/stay" className="text-white font-medium bg-cyan-420 hover:bg-cyan-hover transition duration-300 ease-in-out rounded-3xl px-5 py-3.5 w-fit">Where To Stay</Link>
                </div>
            </div>
        </>
    )
}