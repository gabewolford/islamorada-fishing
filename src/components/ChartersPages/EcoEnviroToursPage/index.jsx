import Header from "../../CharterComponents/EcoEnviroPage/Header"
import PhotoLeftCard1 from "../../CharterComponents/EcoEnviroPage/PhotoLeftCard1"
import PhotoRightCard2 from "../../CharterComponents/EcoEnviroPage/PhotoRightCard2"
import PhotoLeftCard3 from "../../CharterComponents/EcoEnviroPage/PhotoLeftCard3"
import { Helmet } from "react-helmet"
import 'animate.css'


export default function EcoEnviroToursPage() {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-8 md:pt-24 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Helmet>
                        <title>Islamorada Fishing | Eco & Enviro Tours</title>
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