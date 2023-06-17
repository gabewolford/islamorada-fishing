import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <div className="flex flex-col items-start gap-3 mb-2">
                <p className="text-sm"><Link to="/" className="hover:text-cyan-hover">Home</Link> / Contact</p>
                <h1 className="text-3xl lg:text-5xl mx-auto font-medium">Contact Us</h1>
            </div>
        </>
    )
}