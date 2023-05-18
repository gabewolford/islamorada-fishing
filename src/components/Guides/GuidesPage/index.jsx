import Header from "../../GuidesComponents/Header"
import { Helmet } from "react-helmet"

export default function GuidesPage({ guidesList }) {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-24">
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