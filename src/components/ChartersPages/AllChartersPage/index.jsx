import Header from "../../CharterComponents/IndexPage/Header"
import PhotoLeftCard1 from "../../CharterComponents/IndexPage/PhotoLeftCard1"
import PhotoRightCard2 from "../../CharterComponents/IndexPage/PhotoRightCard2"
import PhotoLeftCard3 from "../../CharterComponents/IndexPage/PhotoLeftCard3"
import { Helmet } from "react-helmet"
import 'animate.css';



export default function AllChartersPage() {

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