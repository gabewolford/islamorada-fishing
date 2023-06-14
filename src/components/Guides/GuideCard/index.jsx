import { Link } from "react-router-dom"

export default function GuideCard({ guideData, setDetailPage }) {
    let guideName, guidePhoto, offshoreBadge, inshoreBadge
    if (guideData) {
        guideName = guideData.name
        guidePhoto = '..' + guideData.featured_pic
    }

    return (
        <>
            <Link 
                to={`/guides/${guideData.slug}`}
                onClick={() => setDetailPage(guideData)}
                className="p-4"
            >
                <img src={guidePhoto} alt="" />
                <h3 className="text-md mt-2 text-center font-semi-bold">Capt. {guideName}</h3>
            </Link>
        </>
    )
}