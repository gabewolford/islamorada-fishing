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
            <h1 className='text-xl text-blue-500'>Guide Details</h1>
            <h1 className='text-xl'>Capt. {guideData.name}</h1>
            <img src={guideData.pic} />
            <p>Bio: {guideData.bio}</p>
        </div>
        
    }

    return (
        <>
            {page}
            <Link to="/guides" className="border">Back to guides</Link>
        </>
    )
}