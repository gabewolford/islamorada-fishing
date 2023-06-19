import Header from "../../GuidesComponents/Header"
import { Helmet } from "react-helmet"
import 'animate.css'

export default function GuidesPage({ guidesList }) {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-16">
                    <Helmet>
                        <title>Islamorada Fishing | Our Guides</title>
                    </Helmet>
                    <Header />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {guidesList}
                    </div>
                </div>
            </div> 
        </>
    )
}