import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function GuideDetailsPage({ guideData, setDetailPage }) {
    const id = useParams()

    useEffect(() => {
        if (guideData) {
            localStorage.setItem('guide', JSON.stringify(guideData))
        } else {
            setDetailPage(JSON.parse(localStorage.getItem('guide')))
        }
    }, [])

    let page = <p>Loading details...</p>
    if (guideData) {
        page = 
        <div>
            <h1 className='text-2xl'>Capt. {guideData.name}</h1>
            <img src={guideData.pic} />
            <p>Bio: {guideData.bio}</p>
        </div>
        
    }

    return (
        <>
            <div className="mx-auto max-w-7xl pt-24">
                <div className="mx-6 lg:mx-20 mb-16">
                    <div className="flex flex-col items-start gap-3 mb-8 md:mb-16">
                        <p className="text-sm"><Link to="/" className="hover:text-cyan-hover">Home</Link> / <Link to="/guides" className="hover:text-cyan-hover">Guides</Link> / {guideData.name}</p>
                        <h1 className="text-3xl lg:text-5xl font-medium">Guide Details</h1>
                    </div>
                    <div>
                        {page}
                    </div>
                </div>
            </div>
        </>
    )
}