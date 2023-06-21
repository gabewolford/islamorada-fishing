import { Helmet } from "react-helmet"
import Header from "../ContactComponents/Header"
import 'animate.css'

export default function ContactConfirmationPage() {
    return (
        <>
            <div className="mx-auto max-w-7xl pt-16 md:pt-24 pb-12 md:pb-0">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Helmet>
                        <title>Islamorada Fishing | Contact Us</title>
                    </Helmet>
                    <Header />
                    <div className="mx-auto w-full md:w-1/3 animate__animated animate__pulse">
                        <h6 className="text-center text-lg medium pt-12">Thanks for reaching out!</h6>
                        <h6 className="text-center text-lg pt-2">Your inquiry has been submitted successfully and you will be recieving a confirmation at the email you provided.</h6>
                        <h5 className="text-2xl text-center medium pt-8">We'll be in touch :)</h5>
                    </div>
    
                </div>
            </div>
        </>
    )
}