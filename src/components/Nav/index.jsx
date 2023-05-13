import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <>
            <nav>
                <h1 className='text-3xl text-blue-500'>Islamorda Fishing Guides Logo</h1>
                <ul>
                    <li>
                        <Link to="/" className="mr-2">Home</Link>
                    </li>
                    <li>
                        <Link to="/charters" className="mr-2">Fishing Charters</Link>
                    </li>
                    <li>
                        <Link to="charters/inshore-backcountry" className="mr-2">Inshore Backcountry Charters</Link>
                    </li>
                    <li>
                        <Link to="charters/offshore" className="mr-2">Offshore Charters</Link>
                    </li>
                    <li>
                        <Link to="charters/sunset" className="mr-2">Sunset Fishing Charters</Link>
                    </li>
                    <li>
                        <Link to="charters/eco-enviro-tours" className="mr-2">Eco / Enviro Tours</Link>
                    </li>
                    <li>
                        <Link to="charters/custom" className="mr-2">Custom Fishing Packages</Link>
                    </li>
                    <li>
                        <Link to="/guides" className="mr-2">Our Guides</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}