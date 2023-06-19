import { Helmet } from "react-helmet"
import Header from "../ContactComponents/Header"
import 'animate.css'

export default function ContactConfirmationPage() {
    return (
        <>
            <div className="mx-auto max-w-7xl pt-4 md:pt-24">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Helmet>
                        <title>Islamorada Fishing | Contact Us</title>
                    </Helmet>
                    <Header />
                    <div className="mx-auto w-full md:w-1/3 animate__animated animate__pulse">
                        <h6 className="text-center text-lg font-semibold italic underline underline-offset-4 decoration-2 pt-12">Thank you for reaching out!</h6>
                        <h6 className="text-center text-lg pt-2">Your inquiry has been submitted successfully and you will be recieving a confirmation at the email you provided.</h6>
                        <h5 className="text-2xl text-center font-semibold pt-8">We'll be in touch :)</h5>
                    </div>
    
                </div>
            </div>
        </>
    )
}