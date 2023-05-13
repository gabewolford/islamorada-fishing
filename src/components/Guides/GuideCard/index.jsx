import { Link } from "react-router-dom"

export default function GuideCard({ guideData, setDetailPage }) {
    return (
        <>
            <Link 
                to={`/guides/${guideData.slug}`}
                onClick={() => setDetailPage(guideData)}
            >
                <h3 className="text-xl text-blue-500 border">Captain {guideData.name}</h3>
            </Link>
            
        </>
    )
}