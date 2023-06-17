import { useEffect } from "react"
import { Helmet } from "react-helmet"
import DetailsBanner from "../../GuidesComponents/DetailsBanner"
import GuideFacts from "../../GuidesComponents/GuideFacts"
import { useParams } from "react-router-dom"
import 'animate.css'


export default function GuideDetailsPage({ guideData, setDetailPage, guides }) {
    const { slug } = useParams()

    useEffect(() => {
        const updateDetailPage = () => {
          for (let i = 0; i < guides.length; i++) {
            if (guides[i].slug === slug) {
              setDetailPage(guides[i])
              break;
            }
          }
        };
    
        if (guideData) {
          localStorage.setItem('guide', JSON.stringify(guideData));
        } else {
          const storedGuide = JSON.parse(localStorage.getItem('guide'));
          setDetailPage(storedGuide);
        }
    
        updateDetailPage();
    
      }, [slug, guides, guideData, setDetailPage]);

    return (
        <>
            <div className="mx-auto max-w-7xl pt-24 animate__animated animate__fadeIn">
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