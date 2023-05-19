import Header from '../PartnersStayPage/Header'
import { Helmet } from "react-helmet"

export default function PartnersStayPage() {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-24">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Helmet>
                        <title>Islamorada Fishing | Where To Stay</title>
                    </Helmet>
                    <Header />
                </div>
            </div>
        </>
    )      
}