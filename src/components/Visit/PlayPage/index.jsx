import { Link } from "react-router-dom";

export default function PlayPage() {
    return (
        <>
            <h1 className='text-xl text-blue-500'>Play Page</h1>
            <Link to="/visit-islamorada" className="border-2">Back to Visit Islamorada</Link>
        </>
    )
}