import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <>
            <h1 className="text-xl text-blue-500">Not Found Page</h1>
            <br />
            <Link to="/" className="border">Return Home</Link>
        </>
    )
}