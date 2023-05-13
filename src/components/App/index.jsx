import './styles.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from '../Nav'
import HomePage from '../HomePage'
import FishingChartersPage from '../Charters/FishingChartersPage'
import InshoreBackcountryChartersPage from '../Charters/InshoreBackcountryChartersPage'
import OffshoreChartersPage from '../Charters/OffshoreChartersPage'
import SunsetChartersPage from '../Charters/SunsetChartersPage'
import EcoEnviroToursPage from '../Charters/EcoEnviroToursPage'
import CustomFishingPackagesPage from '../Charters/CustomFishingPackagesPage'
import GuidesPage from '../Guides/GuidesPage'
import GuideCard from '../Guides/GuideCard'
import GuideDetailsPage from '../Guides/GuideDetailsPage'
import NotFoundPage from '../NotFoundPage'
import Footer from '../Footer'


function App() {
  const [guides, setGuides] = useState([])
  const [detailPage, setDetailPage] = useState()

  const allGuides = [
    {
        name: 'Steve Lavoie',
        slug: 'steve-lavoie',
        backcountry: true,
        offshore: false,
        bio: "Capt. Steve is a backcountry fishing guide based out of Worldwide Sportsman in Islamorada. The fishing can take place in the crystal clear waters for Bonefish, Tarpon and Permit or in the Everglades National Park for Redfish, Snook Trout depending on the anglers preference. Capt. Steve is fully equipped with fly and spinning gear. Trips can be geared toward family oriented rod bending action or the experienced fly fisherman. Steve is patient with children as he has 2 young sons of his own. Steve fishes on a Maverick Mirage HPX that has a wonderful ride and can go very shallow for skinny water sight fishing.",
        quote: "TBD"
    },
    {
        name: 'Tony Horsley',
        slug: 'tony-horsley',
        backcountry: true,
        offshore: false,
        bio: "Captain Tony Horsley’s addiction to fishing started when he was a kid. He has fished the waters of The Chesapeake Bay in Virginia his entire life and the beautiful waters of The Florida Keys for over 15 years. His love of the water and his enthusiasm for catching fish led him to his career as a fishing guide in The Sportfishing Capital of the World.Capt. Tony will custom tailor the perfect day for you and your party. He will put on you trophy tarpon, snook, redfish or permit – or guide you to catching snapper and grouper that you can take home (or to a local restaurant) for dinner.",
        quote: "Whether you are an experienced fisherman or this is your first time on the water, Capt. Tony Horsley will guide you through a fishing adventure that you won’t soon forget."
    },
    {
        name: 'Chris Barron',
        slug: 'chris-barron',
        backcountry: true,
        offshore: true,
        bio: "Captain Chris is U.S. Coast Guard-licensed and a Mercury Pro Team staff guide. He can guide you to the ultimate fishing experience.  Fish the inshore flats or the backcountry aboard our 18' Maverick or you can also choose to fish the reefs, wrecks, and offshore aboard the 243cc Everglades. We offer boats to customise all your fishing needs. Captain Chris' intimate knowledge of the area and the fish that inhabit it guarantee your charter will be a successful one! Sponsored by Mercury Marine.",
        quote: "Charter a day, bring your camera, splash on your sunscreen, catch a fish, and capture a memory forever!"
    },
    {
        name: 'Jim Fickling',
        slug: 'jim-fickling',
        backcountry: true,
        offshore: false,
        bio: "Captain Jimi “Worm” Fickling’s father, who was a Green Beret, was stationed in Fayetteville, NC. On the lakes of North Carolina is where his passion for fishing began. After moving to Destin, Fl, he discovered off-shore fishing. His love for this led him to the fabulous Florida Keys.  After fishing for many years with respected, local captains, Captain Fickling established Can-O-Worm’s Fishin’ out of the famous World Wide Sportsman Marina. For several years Captain Fickling has successfully shared his enthusiasm and knowledge of back-country fishing with many people, from all around the world and of many different skill-sets. He enjoys sharing historical knowledge of the Keys and family experiences. Today, Captain Fickling is fortunate enough to not only enjoy skinny-water fishing, but also continue off-shore charter and tournament fishing. Captain Jimi “Worm” Fickling the perfect guide for your next adventure.",
        quote: "Ready to go fishing; any time, any where! "
    },
    {
        name: 'Lance Keene',
        slug: 'lance-keene',
        backcountry: true,
        offshore: false,
        bio: "Captain Lance Keene has spent his entire life fishing on Lake Michigan, Manistee River and many other lakes and rivers around Michigan.  Fishing is his passion. He offers world class Salmon and Steelhead fishing charters on Lake Michigan and the Big Manistee River. In February Lance heads to Islamorada to pursue the waters of the Florida Keys.  Fish aboard his 24 Ranger powered with a 250 Yamaha.  Catching Tarpon,  Snappers, Snook and Redfish are now a part of his fishing skills. A fully-licensed U.S. Coast Guard Captain since, 2006, Lance always delivers a fun, safe day on the water for anglers of any age and experience level. Lance is sponsored by Ranger Boats, Penn, Berkley, J Dezz and Costa.",
        quote: "TBD"
    },
    {
        name: 'Zach Jones',
        slug: 'zach-jones',
        backcountry: true,
        offshore: false,
        bio: "My name is Captain Zach Jones. As a backcountry fishing enthusiast in the beautiful Florida Keys. Favorite fish to target are Tarpon, Bonefish, Permit and Snook along with many others who might present themselves during our trip. Step aboard the Beavertail Skiff available for 1-2 people or the Pathfinder 24ft available for 1-4. I have an urge to find fish for people and love watching the excitement unfold as they land the fish of a lifetime. I have been fishing ever since a child -I fell in love with the flats 9 years ago and never looked back. It’s the feeling of stalking out the fish we catch that gets me going. I was born in North Carolina, hooking bass and chasing reds, fishing for trout in the Asheville Mountains. This place definitely stole me away because of its abundance of species and explosive action! I love all types of fishing and welcome all types, whether spinning or fly fishing I will put you on them.",
        quote: "Get in touch with me and book your family fishing charter today!"
    },
    {
        name: 'Larry Sydnor',
        slug: 'larry-sydnor',
        backcountry: true,
        offshore: false,
        bio: "My name is Captain Zach Jones. As a backcountry fishing enthusiast in the beautiful Florida Keys. Favorite fish to target are Tarpon, Bonefish, Permit and Snook along with many others who might present themselves during our trip. Step aboard the Beavertail Skiff available for 1-2 people or the Pathfinder 24ft available for 1-4. I have an urge to find fish for people and love watching the excitement unfold as they land the fish of a lifetime. I have been fishing ever since a child -I fell in love with the flats 9 years ago and never looked back. It’s the feeling of stalking out the fish we catch that gets me going. I was born in North Carolina, hooking bass and chasing reds, fishing for trout in the Asheville Mountains. This place definitely stole me away because of its abundance of species and explosive action! I love all types of fishing and welcome all types, whether spinning or fly fishing I will put you on them.",
        quote: "Get in touch with me and book your family fishing charter today!"
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
      <Nav />
      <Footer />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charters" element={<FishingChartersPage />} />
        <Route path="charters/inshore-backcountry" element={<InshoreBackcountryChartersPage />} />
        <Route path="charters/offshore" element={<OffshoreChartersPage />} />
        <Route path="charters/sunset" element={<SunsetChartersPage />} />
        <Route path="charters/eco-enviro-tours" element={<EcoEnviroToursPage />} />
        <Route path="charters/custom" element={<CustomFishingPackagesPage />} />
        <Route path="/guides" element={<GuidesPage guidesList={guidesList}/>} />
        <Route path="/guides/:name" element={<GuideDetailsPage guideData={detailPage} setDetailPage={setDetailPage} />}  />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
