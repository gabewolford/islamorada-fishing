import { Link } from "react-router-dom"

export default function InshoreBackcountryChartersPage() {
    return (
        <>
            <h3 className='text-xl text-blue-500'>Inshore Backcountry Charters Page</h3>
            <Link to="/charters" className="border">Back to all charters</Link>
        </>
    )
}