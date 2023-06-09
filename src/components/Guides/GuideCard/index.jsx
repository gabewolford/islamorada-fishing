import { Link } from "react-router-dom"

export default function GuideCard({ guideData, setDetailPage }) {
    let guideName, guidePhoto, badges
    if (guideData) {
        guideName = <h3 className="text-md mt-2 text-center bold">Capt. {guideData.name}</h3>
        guidePhoto = '..' + guideData.featured_pic
        if (guideData.backcountry === true && guideData.offshore === true) {
            badges = <h5 className="text-center">
                        <span className="text-center text-xs bg-offshore-420 text-white px-2 mr-1 py-1 rounded-full">Offshore</span> 
                        <span className="text-center text-xs bg-backcountry-420 text-white px-2 py-1 rounded-full">Backcountry</span>
                    </h5>
        } else if (guideData.backcountry === true) {
            badges = <h5 className="text-center">
                        <span className="text-center text-xs bg-backcountry-420 text-white px-2 py-1 rounded-full">Backcountry</span>
                    </h5>
        } else if (guideData.offshore === true) {
            badges = <h5 className="text-center">
                        <span className="text-center text-xs bg-offshore-420 text-white px-2 mr-1 py-1 rounded-full">Offshore</span> 
                    </h5>
        }
    }

    return (
        <>
            <Link 
                to={`/guides/${guideData.slug}`}
                onClick={() => setDetailPage(guideData)}
                className="p-4 hover-grow"
            >
                <img src={guidePhoto} alt={guideName}/>
                {guideName}
                {badges}
            </Link>
        </>
    )
}