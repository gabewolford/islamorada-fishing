import { Link } from "react-router-dom"

export default function OffshoreChartersPage() {
    return (
        <>
            <h3 className='text-xl text-blue-500'>Offshore Charters Page</h3>
            <Link to="/charters" className="border">Back to all charters</Link>
        </>
    )
}