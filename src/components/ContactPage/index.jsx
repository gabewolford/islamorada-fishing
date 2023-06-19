import Header from "../ContactComponents/Header"
import { Helmet } from "react-helmet"
import ContactForm from "../ContactComponents/ContactForm"
import 'animate.css'


export default function ContactPage() {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-16 md:pt-24 pb-12 md:pb-0 animate__animated animate__fadeIn">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Helmet>
                        <title>Islamorada Fishing | Contact Us</title>
                    </Helmet>
                    <Header />
                    <ContactForm />
                </div>
            </div>
        </>
    )      
}