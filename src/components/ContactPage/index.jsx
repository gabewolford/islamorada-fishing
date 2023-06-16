import Header from "../ContactComponents/Header"
import { Helmet } from "react-helmet"
import { useRef } from "react";
import emailjs from "@emailjs/browser";


export default function ContactPage() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm("service_9ltrzde","contact_form", form.current, 'GLjJJKxGwW-an5Tep')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset()
      };

    return (
        <>
            <div className="mx-auto max-w-7xl pt-24">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Helmet>
                        <title>Islamorada Fishing | Contact Us</title>
                    </Helmet>
                    <Header />

                    <div className="flex">
                        <div className="mx-auto">

                            <form ref={form} onSubmit={sendEmail} className="grid grid-col-2">
                                <div className="flex flex-row col-span 1 mb-2">
                                    <label>Name:</label>
                                    <input 
                                        type="text" 
                                        name="user_name" 
                                        className="border ml-2"
                                    />
                                </div>
                                
                                <div className="flex flex-row mb-2">
                                    <label>Email:</label>
                                    <input 
                                        type="email" 
                                        name="user_email"
                                        className="border ml-2"
                                    />
                                </div>

                                <div className="flex flex-row mb-2">
                                    <label>Message:</label>
                                    <textarea name="user_message" className="border ml-2"/>
                                </div>

                                <span className="mx-auto">
                                    <button
                                        type="submit" 
                                        value="Send" 
                                        className="border bg-cyan-420 text-white px-2 py-1 rounded-2xl ml-2">Send
                                    </button>
                                </span>
                            </form>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )      
}