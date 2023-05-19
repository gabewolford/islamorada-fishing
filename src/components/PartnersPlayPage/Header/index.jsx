import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <div className="flex flex-col items-start gap-3 mb-8 md:mb-16">
                <p className="text-sm"><Link to="/" className="hover:text-cyan-hover">Home</Link> / <Link to="/partners" className="hover:text-cyan-hover">Partners</Link> / Play</p>
                <h1 className="text-3xl lg:text-5xl font-medium">Where To Play</h1>
            </div>
        </>
    )
}