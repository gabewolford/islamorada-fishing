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
import lanceKeenePhoto from '../../assets/lance-keene.png'
import chrisBarronPhoto from '../../assets/chris-barron.png'
import mikeVeneziaPhoto from '../../assets/mike-venezia.png'

function App() {
  const [guides, setGuides] = useState([])
  const [detailPage, setDetailPage] = useState()

  const allGuides = [
    {
      name: 'Chris Barron',
      slug: 'chris-barron',
      featured_pic: chrisBarronPhoto,
      backcountry: true,
      offshore: true,
      business_name: 'Stray Cat Charters',
      about_me: "Originally from Abington, MA. I came to Islamorada in 1979 and started fishing offshore. After that I decided to buy a skiff and start my own business fishing the backcountry. Fishing is my passion. I have fished many tournaments throughout my time and I am a Mercury Pro Team Guide. Now, my focus and enjoyment comes from giving my customers a quality experience on the water for the best fishing possible. I am married to my wife, Christine, and we have two successful children. We are just a fishing family, we enjoy fishing together whenever we get the chance. A family that fishes together stays together.",
      boats: ['18" Maverick w/ 150HP Mercury', '24" Everglades'],
      dock: 'World Wide Sportsman',
      specialty: 'Live bait fishing for tarpon and snook',
      fun_fact: "My wife has the same name as me and we adopt Stray Cats hence Stray Cat Charters.",
      days_off: "Besides taking my wife fishing, I really enjoy grilling on my Traeger, smoking fish and preparing feasts for family and friends."
    },
    {
        name: 'Lance Keene',
        slug: 'lance-keene',
        featured_pic: lanceKeenePhoto,
        backcountry: true,
        offshore: false,
        business_name: 'Steelhead Hunter Charters',
        about_me: "I'm a full-time fishing guide half the season in the Florida Keys, and the other half in Michigan chasing salmon and steelhead.",
        boats: ['2400 Bay Ranger w/ 250HP Yamaha'],
        dock: 'World Wide Sportsman',
        specialty: 'Snapper, snook, tarpon, permit',
        fun_fact: "I like to fish bass tournaments in Northern Michigan.",
        days_off: "I still spend time on the water trying new techniques, catching bait, or just trying to catch fish for myself."
    },
    {
        name: 'Mike Venezia',
        slug: 'mike-venezia',
        featured_pic: mikeVeneziaPhoto,
        backcountry: true,
        offshore: false,
        business_name: 'Boned Up Charters',
        about_me: "I was born and raised in Florida, and have been fishing since I was able to walk. I have been coming to the Keys since the age of three and being a full-time resident for almost 20 years, I have always loved and enjoyed backcountry fishing. I have been operating out the world renowned Bud n' Mary's for over 10 years.",
        boats: [`17'5" Maverick Master Angler w/ 150HP Mercury`, `17'8" Hells Bay Whipray Pro w/ 70HP Yamaha`],
        dock: "Bud N' Mary's",
        specialty: 'Light tackle sport fishing for tarpon and snook',
        fun_fact: "Did you know that manatees have toenails? I have found and rescued three turtles.",
        days_off: "Taking my kids fishing and spending time with my family."
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
