import { Link } from "react-router-dom";

export default function CustomFishingPackagesPage() {
    return (
        <>
            <h3 className='text-xl text-blue-500'>Custom Fishing Packages Page</h3>
            <Link to="/charters" className="border">Back to all charters</Link>
        </>
    )
}