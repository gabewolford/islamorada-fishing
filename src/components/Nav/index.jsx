import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav>
                <h1 className='text-3xl text-blue-500'>Islamorda Fishing Guides Logo</h1>
                <ul>
                    <li>
                        <Link to="/" className="mr-2 font-bold">Home</Link>
                    </li>
                    <li>
                        <Link to="/charters" className="mr-2 font-bold">Fishing Charters</Link>
                    </li>
                    <li>
                        <Link to="charters/inshore-backcountry" className="mr-2">Inshore Backcountry Charters</Link>
                    </li>
                    <li>
                        <Link to="charters/offshore" className="mr-2">Offshore Charters</Link>
                    </li>
                    <li>
                        <Link to="charters/eco-enviro-tours" className="mr-2">Eco / Enviro Tours</Link>
                    </li>
                    <li>
                        <Link to="charters/custom" className="mr-2">Custom Fishing Packages</Link>
                    </li>
                    <li>
                        <Link to="/guides" className="mr-2 font-bold">Our Guides</Link>
                    </li>
                    <li>
                        <Link to="/visit-islamorada" className="mr-2 font-bold">Visit Islamorada</Link>
                    </li>
                    <li>
                        <Link to="/visit-islamorada/world-wide-sportsman" className="mr-2">World Wide Sportsman</Link>
                    </li>
                    <li>
                        <Link to="/visit-islamorada/stay" className="mr-2">Stay</Link>
                    </li>
                    <li>
                        <Link to="/visit-islamorada/play" className="mr-2">Play</Link>
                    </li>
                    <li>
                        <Link to="/FAQs" className="mr-2 font-bold">FAQs</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="mr-2 font-bold">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}