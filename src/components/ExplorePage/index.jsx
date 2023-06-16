import Header from "../VisitPageComponents/Header"
import { Helmet } from "react-helmet"
import PhotoLeftCard1 from "../VisitPageComponents/PhotoLeftCard1"
import PhotoRightCard2 from "../VisitPageComponents/PhotoRightCard2"
import PhotoLeftCard3 from "../VisitPageComponents/PhotoLeftCard3"



export default function ExplorePage() {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-24">
                <div className="mx-6 lg:mx-20 mb-16">
                    <Helmet>
                        <title>Islamorada Fishing | Visit Islamorada</title>
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