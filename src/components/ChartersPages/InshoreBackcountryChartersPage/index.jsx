import Header from "../../CharterComponents/BackcountryPage/Header"
import PhotoLeftCard1 from "../../CharterComponents/BackcountryPage/PhotoLeftCard1"
import PhotoRightCard2 from "../../CharterComponents/BackcountryPage/PhotoRightCard2"
import PhotoLeftCard3 from "../../CharterComponents/BackcountryPage/PhotoLeftCard3"
import PhotoRightCard4 from "../../CharterComponents/BackcountryPage/PhotoRightCard4"
import { Helmet } from "react-helmet"
import 'animate.css'
import { useEffect } from "react"


export default function InshoreBackcountryChartersPage() {

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
            <div className="mx-auto max-w-7xl pt-4 md:pt-24 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Helmet>
                        <title>Islamorada Fishing | Backcountry & Inshore Charters</title>
                    </Helmet>
                    <Header />
                    <PhotoLeftCard1 />
                    <PhotoRightCard2 />
                    <PhotoLeftCard3 />
                    <PhotoRightCard4 />
                </div>
            </div>
            
    
        </>
    )      
}