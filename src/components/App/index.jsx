import './styles.css'
import preline from 'preline'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from '../Nav'
import HomePage from '../HomePage'
import AllChartersPage from '../ChartersPages/AllChartersPage'
import InshoreBackcountryChartersPage from '../ChartersPages/InshoreBackcountryChartersPage'
import OffshoreChartersPage from '../ChartersPages/OffshoreChartersPage'
import EcoEnviroToursPage from '../ChartersPages/EcoEnviroToursPage'
import GuidesPage from '../Guides/GuidesPage'
import GuideCard from '../Guides/GuideCard'
import GuideDetailsPage from '../Guides/GuideDetailsPage'
import VisitPage from '../VisitPage'
import FAQPage from '../FAQPage'
import ContactPage from '../ContactPage'
import PartnersPage from '../PartnersPage'
import PartnersStayPage from '../PartnersStayPage'
import PartnersPlayPage from '../PartnersPlayPage'
import NotFoundPage from '../NotFoundPage'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'
import { Helmet } from 'react-helmet'


function App() {
  const [guides, setGuides] = useState([])
  const [detailPage, setDetailPage] = useState()

  const allGuides = [
    {
        name: 'Lance Keene',
        slug: 'lance-keene',
        featured_pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        business_name: 'Steelhead Hunter Charters',
        about_me: "I'm a full-time fishing guide half the season in the Florida Keys, and the other half in Michigan chasing salmon and steelhead.",
        boat: '2400 Bay Ranger, 250HP Yamaha',
        dock: 'World Wide Sportsman',
        specialty: 'Snapper, snook, tarpon, permit',
        fun_fact: "I like to fish bass tournaments in Northern Michigan.",
        days_off: "I still spend time on the water trying new techniques, catching bait, or just trying to catch fish for myself."
    },
  ]

  useEffect(() => {
    setGuides(allGuides)
  }, [])

  let guidesList 
  if (allGuides.length > 0) {
    guidesList = guides
      .map((guide, i) => <GuideCard key={i} guideData={guide} setDetailPage={setDetailPage}/>)
  }

  return (
    <>
        <Helmet>
            <meta name="description" content='Experience the ultimate fishing adventure in Islamorada, Florida Keys, with the Guides and Charters of World Wide Sportsman.'/>
            <meta name="keywords" content='Fishing Guides, Fishing, Pro Fishing Guide, Fishing Charter, Florida Keys, Islamorada, Inshore Backcountry, Offshore, Sunset Tarpon, Flats Bonefish, Everglades Eco, Enviro Tours'/>
        </Helmet>
        <ScrollToTop />
        <Nav />
        <Footer />
        
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/charters" element={<AllChartersPage />} />
            <Route path="/charters/inshore-backcountry" element={<InshoreBackcountryChartersPage />} />
            <Route path="/charters/offshore" element={<OffshoreChartersPage />} />
            <Route path="/charters/eco-enviro-tours" element={<EcoEnviroToursPage />} />
            <Route path="/guides" element={<GuidesPage guidesList={guidesList}/>} />
            <Route path="/guides/:name" element={<GuideDetailsPage guideData={detailPage} setDetailPage={setDetailPage} />}  />
            <Route path="/visit-islamorada" element={<VisitPage />} />
            <Route path="/frequently-asked-questions" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/partners/stay" element={<PartnersStayPage />} />
            <Route path="/partners/play" element={<PartnersPlayPage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    </>
  )
}

export default App
