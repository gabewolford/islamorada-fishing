import { Helmet } from "react-helmet"
import Header from "../WhereToStayComponents/Header"

export default function WhereToStayPage({ resortsList }) {
    return (
        <>
            <div className="mx-auto max-w-7xl pt-16 md:pt-24 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-16">
                    <Helmet>
                        <title>Islamorada Fishing | Where To Stay</title>
                    </Helmet>
                    <Header />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-16 justify-center">
                        {resortsList}
                    </div>
                </div>
            </div> 
        </>
    )
}