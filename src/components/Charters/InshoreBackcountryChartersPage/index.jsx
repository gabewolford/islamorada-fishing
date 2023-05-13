import { Link } from "react-router-dom"

export default function InshoreBackcountryChartersPage() {
    return (
        <>
            <h3 className='text-xl text-blue-500'>Backcountry & Inshore Charters Page</h3>
            <Link to="/charters" className="border-2">Back to all charters</Link>
        </>
    )
}