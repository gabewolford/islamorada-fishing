import { Link } from "react-router-dom"

export default function StayPage() {
    return (
        <>
            <h1 className='text-xl text-blue-500'>Stay Page</h1>
            <Link to="/visit-islamorada" className="border-2">Back to Visit Islamorada</Link>
        </>
    )
}