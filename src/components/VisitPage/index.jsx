import Header from "../VisitPageComponents/Header"
import { Helmet } from "react-helmet"


export default function VisitPage() {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-24">
                <div className="mx-6 lg:mx-20 mb-16">
                    <Helmet>
                        <title>Islamorada Fishing | Visit Islamorada</title>
                    </Helmet>
                    <Header />
                </div>
            </div> 
        </>
    )
}