import { Link } from "react-router-dom";

export default function FishingChartersPage() {
    return (
        <>
            <h3 className='text-xl text-blue-500'>Fishing Charters Page</h3>
            <div className="border-2 m-6">
                <Link to="/charters/inshore-backcountry">Inshore Backcountry</Link>
            </div>
            <div className="border-2 m-6">
                <Link to="/charters/offshore">Offshore</Link>
            </div>
            <div className="border-2 m-6">
                <Link to="/charters/eco-enviro-tours">Eco / Enviro Tours</Link>
            </div>
            <div className="border-2 m-6">
                <Link to="/charters/custom">Custom Packages</Link>
            </div>
        </>
    )
}