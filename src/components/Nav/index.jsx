import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav>
                <h1 className='text-3xl text-blue-500'>Logo</h1>
                <ul>
                    <li>
                        <Link to="/" className="mr-2 font-bold">Home</Link>
                    </li>
                    <li className="font-bold">
                        Charters
                    </li>
                    <li>
                        <Link to="/charters" className="mr-2">All Charters</Link>
                    </li>
                    <li>
                        <Link to="/charters/inshore-backcountry" className="mr-2">Backcountry & Inshore</Link>
                    </li>
                    <li>
                        <Link to="/charters/offshore" className="mr-2">Reef & Offshore</Link>
                    </li>
                    <li>
                        <Link to="/charters/eco-enviro-tours" className="mr-2">Eco & Enviro Tours</Link>
                    </li>
                    <li>
                        <Link to="/guides" className="mr-2 font-bold">Guides</Link>
                    </li>
                    <li>
                        <Link to="/visit-islamorada" className="mr-2 font-bold">Visit Islamorada</Link>
                    </li>
                    <li>
                        <Link to="/frequently-asked-questions" className="mr-2 font-bold">FAQs</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="mr-2 font-bold">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}