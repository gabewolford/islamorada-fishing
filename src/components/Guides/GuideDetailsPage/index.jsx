import { useEffect } from "react"
import { Helmet } from "react-helmet"
import DetailsBanner from "../../GuidesComponents/DetailsBanner"
import GuideFacts from "../../GuidesComponents/GuideFacts"

export default function GuideDetailsPage({ guideData, setDetailPage }) {

    useEffect(() => {
        if (guideData) {
            localStorage.setItem('guide', JSON.stringify(guideData))
        } else {
            setDetailPage(JSON.parse(localStorage.getItem('guide')))
        }
    }, [])

    return (
        <>
            <div className="mx-auto max-w-7xl pt-24">
                <div className="mx-6 lg:mx-20 mb-16">
                    <Helmet>
                        <title>Islamorada Fishing | Guide Details</title>
                    </Helmet>
                    <DetailsBanner guideData={guideData} />
                    <GuideFacts guideData={guideData} />
                </div>
            </div>
        </>
    )
}