import Header from "../PartnersComponents/Header"
import { Helmet } from "react-helmet"

export default function PartnersPage({ partnersList }) {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-24">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Helmet>
                        <title>Islamorada Fishing | Our Partners</title>
                    </Helmet>
                    <Header />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
                        {partnersList}
                    </div>
                </div>
            </div>

        </>
    )      
}