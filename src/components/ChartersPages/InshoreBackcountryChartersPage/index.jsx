import Header from "../../CharterComponents/BackcountryPage/Header"
import PhotoLeftCard1 from "../../CharterComponents/BackcountryPage/PhotoLeftCard1"
import PhotoRightCard2 from "../../CharterComponents/BackcountryPage/PhotoRightCard2"
import PhotoLeftCard3 from "../../CharterComponents/BackcountryPage/PhotoLeftCard3"
import PhotoRightCard4 from "../../CharterComponents/BackcountryPage/PhotoRightCard4"
import { Helmet } from "react-helmet"
import 'animate.css'


export default function InshoreBackcountryChartersPage() {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-8 md:pt-24 animate__animated animate__fadeIn">
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