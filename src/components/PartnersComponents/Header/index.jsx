import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <div className="flex flex-col items-start gap-3 mb-8 md:mb-16">
                <p className="text-sm"><Link to="/" className="hover:text-cyan-hover">Home</Link> / Partners</p>
                <h1 className="text-3xl lg:text-5xl font-medium">Our Partners</h1>
            </div>
        </>
    )
}