import Header from "../../CharterComponents/OffshorePage/Header"
import PhotoLeftCard1 from "../../CharterComponents/OffshorePage/PhotoLeftCard1"
import PhotoRightCard2 from "../../CharterComponents/OffshorePage/PhotoRightCard2"
import { Helmet } from "react-helmet"
import 'animate.css'


export default function OffshoreChartersPage() {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-8 pt-8 md:pt-24 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Helmet>
                        <title>Islamorada Fishing | Reef & Offshore Charters</title>
                    </Helmet>
                    <Header />
                    <PhotoLeftCard1 />
                    <PhotoRightCard2 />
                </div>
            </div>
        </>
    )      
}