import Header from "../ExplorePageComponents/Header"
import { Helmet } from "react-helmet"
import PhotoLeftCard1 from "../ExplorePageComponents/PhotoLeftCard1"
import 'animate.css'


export default function ExplorePage({ resortsList }) {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-16">
                    <Helmet>
                        <title>Islamorada Fishing | Explore Islamorada</title>
                    </Helmet>
                    <Header />
                    <PhotoLeftCard1 />
                    <h3 className="text-2xl md:text-3xl bold mb-8">Where to stay</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 md:gap-y-16 justify-center">
                        {resortsList}
                    </div>
                </div>
            </div> 
        </>
    )
}