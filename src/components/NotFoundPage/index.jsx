import Header from "../NotFoundComponents/Header"
import { Helmet } from "react-helmet"
import 'animate.css'

export default function NotFoundPage() {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-4 md:pt-24 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Helmet>
                        <title>Islamorada Fishing | 404 Page Not Found</title>
                    </Helmet>
                    <Header />
                </div>
            </div>
            
    
        </>
    )      
}