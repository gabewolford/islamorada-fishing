import Header from "../PartnersComponents/Header"
import { Helmet } from "react-helmet"
import 'animate.css'

export default function PartnersPage({ partnersList }) {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-16 md:pt-24 pb-8 md:pb-0 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Helmet>
                        <title>Islamorada Fishing | Our Partners</title>
                    </Helmet>
                    <Header />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-center">
                        {partnersList}
                    </div>
                </div>
            </div>

        </>
    )      
}