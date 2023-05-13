import { Link } from "react-router-dom"

export default function EcoEnviroToursPage() {
    return (
        <>
            <h3 className='text-xl text-blue-500'>Eco / Enviro Tours Page</h3>
            <Link to="/charters" className="border">Back to all charters</Link>
        </>
    )
}