import { Link } from "react-router-dom"

export default function DetailsHeader({ guideData }) {
    let captainName, businessName, guideType
    
    if (guideData) {
        captainName = guideData.name
        businessName = guideData.business_name
        if (guideData.backcountry && guideData.offshore) {
            guideType = 'Backcountry & Offshore'
        } else if (guideData.backcountry) {
            guideType = 'Backcountry'
        } else if (guideData.offshore) {
            guideType = 'Offshore'
        }
    }


    return (
        <>
            <div className="flex flex-col items-start gap-3 mb-8 md:mb-16">
                <p className="text-sm"><Link to="/" className="hover:text-cyan-hover">Home</Link> / <Link to="/guides" className="hover:text-cyan-hover">Guides</Link> / {captainName}</p>
            </div>
            <div className="text-center">
                {guideType && <h4>{guideType} Guide</h4>}
                <h1 className="text-3xl lg:text-5xl font-medium">Capt. {captainName}</h1>
                {businessName && <h5>of {businessName}</h5>}
            </div>
        </>
    )
}