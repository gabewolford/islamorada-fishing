import Header from "../ExplorePageComponents/Header"
import { Helmet } from "react-helmet"
import PhotoLeftCard1 from "../ExplorePageComponents/PhotoLeftCard1"
import PhotoRightCard2 from "../ExplorePageComponents/PhotoRightCard2"
import PhotoLeftCard3 from "../ExplorePageComponents/PhotoLeftCard3"
import 'animate.css'


export default function ExplorePage() {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-16">
                    <Helmet>
                        <title>Islamorada Fishing | Explore Islamorada</title>
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