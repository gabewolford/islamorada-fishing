import { Link } from "react-router-dom"

export default function GuideCard({ guideData, setDetailPage }) {

    let backcountryBadge
    if (guideData.backcountry === true ) {
        backcountryBadge = <p className="absolute bottom-0 left-0 text-sm bg-green-400 m-2 px-2 py-1 rounded-xl">Backcountry</p>
    }

    let offshoreBadge
    if (guideData.offshore === true ) {
        offshoreBadge = <p className="absolute bottom-0 right-0 text-sm bg-orange-300 m-2 px-2 py-1 rounded-xl">Offshore</p>
    }

    return (
        <>
            <Link 
                to={`/guides/${guideData.slug}`}
                onClick={() => setDetailPage(guideData)}
            >
                <div className="border-2 border-blue-500 w-fit mb-4">
                    <h3 className="text-xl text-blue-500">Captain {guideData.name}</h3>
                    <div className="relative">
                        <img src={guideData.pic} alt={guideData.name} />
                        {backcountryBadge}
                        {offshoreBadge}
                    </div>
                </div>
            </Link>
            
        </>
    )
}