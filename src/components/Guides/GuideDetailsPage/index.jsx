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
                    <h1 className="text-3xl font-medium mb-6">Guide Details</h1>
                    <div>
                        {page}
                        <Link to="/guides" className="text-cyan-420 hover:text-cyan-hover text-cyan-420 hover:text-cyan-hover transition duration-100 ease-in-out font-medium">← Back to guides</Link>
                    </div>
                </div>
            </div>
        </>
    )
}