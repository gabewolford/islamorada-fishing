import { Link } from "react-router-dom"

export default function OffshoreChartersPage() {
    return (
        <>
            <div className="mx-auto max-w-7xl pt-24">
                <div className="mx-6 lg:mx-20 mb-16">
                    <h1 className="text-3xl font-medium mb-6">Offshore Charters</h1>
                    <Link to="/charters" className="text-cyan-420 hover:text-cyan-hover text-cyan-420 hover:text-cyan-hover transition duration-100 ease-in-out font-medium">← Back to all charters</Link>
                </div>
            </div>
        </>
    )
}