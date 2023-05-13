import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function GuideDetailsPage({ guideData, setDetailPage }) {
    const { name } = useParams()

    return (
        <>
            <h1 className='text-xl text-blue-500'>Guide Details</h1>

            <Link 
                to={`/guides/${guideData.slug}`}
                onClick={() => setDetailPage(guideData)}
            >
                <h1 className='text-xl text-blue-500'>Captain: {guideData.name}</h1>
            </Link>

            <Link to="/guides" className="border">Back to guides</Link>
        </>
    )
}