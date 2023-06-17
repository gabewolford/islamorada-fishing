import Header from "../../CharterComponents/IndexPage/Header"
import PhotoLeftCard1 from "../../CharterComponents/IndexPage/PhotoLeftCard1"
import PhotoRightCard2 from "../../CharterComponents/IndexPage/PhotoRightCard2"
import PhotoLeftCard3 from "../../CharterComponents/IndexPage/PhotoLeftCard3"
import { Helmet } from "react-helmet"
import 'animate.css';
import { useEffect } from "react"



export default function AllChartersPage() {

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
            <div className="mx-auto max-w-7xl pt-8 pt-8 md:pt-24 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Helmet>
                        <title>Islamorada Fishing | All Charters</title>
                    </Helmet>
                    <Header />
                    <PhotoLeftCard1 />
                    <PhotoRightCard2 />
                    <PhotoLeftCard3 />
                </div>
            </div>
            
    
        </>
    )      
}