import { Link } from "react-router-dom";
import bookdirectlyImage from '../../../assets/book-directly-image-home.png'

export default function PhotoLeftInfoCard() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center gap-6 order-1 mx-6 mb-16">
                <div className="flex">
                    <img src={bookdirectlyImage} alt="Hero Image" />
                </div>
                <div className="flex flex-col">
                    <h4 className="text-2xl leading-7 mb-4 ">Book directly with one of our local guides</h4>
                    <p className="text-sm mb-4">All of our guides are licensed captains with years of experience and local expertise. We welcome all experience levels, whether you’re a seasoned fly fisherman or a family looking to try something new.</p>
                    <Link to="/guides" className="text-white font-medium bg-cyan-420 rounded-3xl px-5 py-3.5 w-fit">Meet Our Guides</Link>
                </div>
            </div>
        </>
    )
}