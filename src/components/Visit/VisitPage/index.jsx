import { Link } from "react-router-dom"

export default function VisitPage() {

    return (
        <>
            <h1 className='text-xl text-blue-500'>Visit Islamorada Page</h1>
            <div className="border-2 m-6">
                <Link to="/visit-islamorada/world-wide-sportsman">World Wide Sportsman</Link>
            </div>
            <div className="border-2 m-6">
                <Link to="/visit-islamorada/stay">Stay</Link>
            </div>
            <div className="border-2 m-6">
                <Link to="/visit-islamorada/play">Play</Link>
            </div>
        </>
    )
}