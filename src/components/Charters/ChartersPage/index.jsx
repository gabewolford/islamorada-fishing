import { Link } from "react-router-dom"

export default function ChartersPage() {

    return (
        <>
        <div className="absolute top-36 mx-20">
            <h1 className='text-xl text-blue-500'>All Charters Page</h1>
                <div className="border-2 mb-6">
                    <Link to="/charters/inshore-backcountry" className="mr-2">Backcountry & Inshore</Link>
                </div>
                <div className="border-2 mb-6">
                    <Link to="/charters/offshore" className="mr-2">Reef & Offshore</Link>
                </div>
                <div className="border-2 mb-6">
                    <Link to="/charters/eco-enviro-tours" className="mr-2">Eco & Enviro Tours</Link>
                </div>
            </div>
        </>
    )
}