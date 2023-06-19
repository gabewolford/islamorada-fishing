import { Helmet } from "react-helmet"
import Header from "../WhereToStayComponents"

export default function WhereToStayPage() {
    return (
        <>
            <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-16">
                    <Helmet>
                        <title>Islamorada Fishing | Where To Stay</title>
                    </Helmet>
                    <Header />

                </div>
            </div> 
        </>
    )
}