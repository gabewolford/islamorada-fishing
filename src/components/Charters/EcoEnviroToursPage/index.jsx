import { Link } from "react-router-dom"

export default function EcoEnviroToursPage() {
    return (
        <>
        <div className="absolute top-36 mx-20">
            <h3 className='text-xl text-blue-500'>Eco / Enviro Tours Page</h3>
            <Link to="/charters" className="border-2">Back to all charters</Link>
        </div>
        </>
    )
}