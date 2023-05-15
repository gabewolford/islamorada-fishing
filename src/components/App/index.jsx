import './styles.css'
import preline from 'preline'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from '../Nav'
import HomePage from '../HomePage'
import ChartersPage from '../Charters/ChartersPage'
import InshoreBackcountryChartersPage from '../Charters/InshoreBackcountryChartersPage'
import OffshoreChartersPage from '../Charters/OffshoreChartersPage'
import EcoEnviroToursPage from '../Charters/EcoEnviroToursPage'
import GuidesPage from '../Guides/GuidesPage'
import GuideCard from '../Guides/GuideCard'
import GuideDetailsPage from '../Guides/GuideDetailsPage'
import VisitPage from '../VisitPage'
import FAQPage from '../FAQPage'
import ContactPage from '../ContactPage'
import PartnersPage from '../PartnersPage'
import NotFoundPage from '../NotFoundPage'
import Footer from '../Footer'


function App() {
  const [guides, setGuides] = useState([])
  const [detailPage, setDetailPage] = useState()

  const allGuides = [
    {
        name: 'Steve Lavoie',
        slug: 'steve-lavoie',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        bio: "Capt. Steve is a backcountry fishing guide based out of Worldwide Sportsman in Islamorada. The fishing can take place in the crystal clear waters for Bonefish, Tarpon and Permit or in the Everglades National Park for Redfish, Snook Trout depending on the anglers preference. Capt. Steve is fully equipped with fly and spinning gear. Trips can be geared toward family oriented rod bending action or the experienced fly fisherman. Steve is patient with children as he has 2 young sons of his own. Steve fishes on a Maverick Mirage HPX that has a wonderful ride and can go very shallow for skinny water sight fishing.",
        quote: "TBD"
    },
    {
        name: 'Tony Horsley',
        slug: 'tony-horsley',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        bio: "Captain Tony Horsley’s addiction to fishing started when he was a kid. He has fished the waters of The Chesapeake Bay in Virginia his entire life and the beautiful waters of The Florida Keys for over 15 years. His love of the water and his enthusiasm for catching fish led him to his career as a fishing guide in The Sportfishing Capital of the World.Capt. Tony will custom tailor the perfect day for you and your party. He will put on you trophy tarpon, snook, redfish or permit – or guide you to catching snapper and grouper that you can take home (or to a local restaurant) for dinner.",
        quote: "Whether you are an experienced fisherman or this is your first time on the water, Capt. Tony Horsley will guide you through a fishing adventure that you won’t soon forget."
    },
    {
        name: 'Chris Barron',
        slug: 'chris-barron',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: true,
        bio: "Captain Chris is U.S. Coast Guard-licensed and a Mercury Pro Team staff guide. He can guide you to the ultimate fishing experience.  Fish the inshore flats or the backcountry aboard our 18' Maverick or you can also choose to fish the reefs, wrecks, and offshore aboard the 243cc Everglades. We offer boats to customise all your fishing needs. Captain Chris' intimate knowledge of the area and the fish that inhabit it guarantee your charter will be a successful one! Sponsored by Mercury Marine.",
        quote: "Charter a day, bring your camera, splash on your sunscreen, catch a fish, and capture a memory forever!"
    },
    {
        name: 'Jim Fickling',
        slug: 'jim-fickling',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        bio: "Captain Jimi “Worm” Fickling’s father, who was a Green Beret, was stationed in Fayetteville, NC. On the lakes of North Carolina is where his passion for fishing began. After moving to Destin, Fl, he discovered off-shore fishing. His love for this led him to the fabulous Florida Keys.  After fishing for many years with respected, local captains, Captain Fickling established Can-O-Worm’s Fishin’ out of the famous World Wide Sportsman Marina. For several years Captain Fickling has successfully shared his enthusiasm and knowledge of back-country fishing with many people, from all around the world and of many different skill-sets. He enjoys sharing historical knowledge of the Keys and family experiences. Today, Captain Fickling is fortunate enough to not only enjoy skinny-water fishing, but also continue off-shore charter and tournament fishing. Captain Jimi “Worm” Fickling the perfect guide for your next adventure.",
        quote: "Ready to go fishing; any time, any where! "
    },
    {
        name: 'Lance Keene',
        slug: 'lance-keene',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        bio: "Captain Lance Keene has spent his entire life fishing on Lake Michigan, Manistee River and many other lakes and rivers around Michigan.  Fishing is his passion. He offers world class Salmon and Steelhead fishing charters on Lake Michigan and the Big Manistee River. In February Lance heads to Islamorada to pursue the waters of the Florida Keys.  Fish aboard his 24 Ranger powered with a 250 Yamaha.  Catching Tarpon,  Snappers, Snook and Redfish are now a part of his fishing skills. A fully-licensed U.S. Coast Guard Captain since, 2006, Lance always delivers a fun, safe day on the water for anglers of any age and experience level. Lance is sponsored by Ranger Boats, Penn, Berkley, J Dezz and Costa.",
        quote: "TBD"
    },
    {
        name: 'Zach Jones',
        slug: 'zach-jones',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        bio: "My name is Captain Zach Jones. As a backcountry fishing enthusiast in the beautiful Florida Keys. Favorite fish to target are Tarpon, Bonefish, Permit and Snook along with many others who might present themselves during our trip. Step aboard the Beavertail Skiff available for 1-2 people or the Pathfinder 24ft available for 1-4. I have an urge to find fish for people and love watching the excitement unfold as they land the fish of a lifetime. I have been fishing ever since a child -I fell in love with the flats 9 years ago and never looked back. It’s the feeling of stalking out the fish we catch that gets me going. I was born in North Carolina, hooking bass and chasing reds, fishing for trout in the Asheville Mountains. This place definitely stole me away because of its abundance of species and explosive action! I love all types of fishing and welcome all types, whether spinning or fly fishing I will put you on them.",
        quote: "Get in touch with me and book your family fishing charter today!"
    },
    {
        name: 'Larry Sydnor',
        slug: 'larry-sydnor',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        bio: "I am a United States Coast Guard Master Captain, an International Game Fish Association Certified Captain and a popular flats backcountry guide because I use my power and expertise on the poling platform to provide safe and unparalleled fishing adventures on the water.  I am an active and respected member of the National Association of Charter Boat Operators, the Florida Guides Association and the Florida Keys Fishing Guides Association.   Because I have more than one boat to choose from each trip is customized for the individual for optimum flats and backcountry fishing depending on weather and angler weights and both boats are fast, stable and get into the skinniest waters to target undisturbed fish. I am on the Mercury Pro Team.  I also offer a unique continued launch after originating in Islamorada to go on into the far backcountry for protected and greater secluded fishing and a true experience with nature.",
        quote: "Come stand on my bow and let me guide you to the fun and excitement of flats and backcountry fishing!"
    },
    {
        name: 'Steve Griswold',
        slug: 'steve-griswold',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        bio: "I have been fishing the Islamorada area since I was a young boy in the early 70's.  I have been a USCG licensed captain & full time fishing guide since 1997.  I have a 22' Pathfinder Tournament Bay Boat that I use for patch reef, gulf and family fishing trips.  I also have an actioncraft flats boat that I use for sight fishing the flats. I specialize in tarpon, bonefish and permit fishing on the flats. and for snook, redfish and trout in the back country - gulf and patch reef fishing for grouper, cobia and snapper. Something for everyone from experienced anglers to beginners and family fun trips.",
        quote: "TBD"
    },
    {
        name: 'Drew Nobregas',
        slug: 'drew-nobregas',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        bio: "Hey everybody! I’m Captain Drew. I am a born and raised local of Islamorada, and a second generation captain of the keys. My father was a backcountry guide here in Islamorada for 15 years and has instilled his love for fishing in me. Ever since being a toddler my father use to take me fishing. He taught me the fundamentals of knot tying, fly tying, throwing a cast net, and so many more things that have led me to pursue my passion of being a fishing guide that I look back on and am so thankful for now. I started fishing on my own when I was 10 years old out of a 12 foot jon boat and would take my friends out for fun after school. My summers were spent in Florida Bay chasing any fish I could catch. It wasn’t until I was a teenager that I had interest in fishing offshore, so on weekends I worked as a deckhand for several years up until my first summer back from college. After having so much first-hand knowledge on how the charter fishing business worked, I knew it was what I wanted to do.I found time in between school to take my captain's license course, and to research the many facets involved in running a safe, steady, and successful business.",
        quote: "TBD"
    },
    {
        name: 'John Guastavino',
        slug: 'john-guastavino',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        bio: "I’m originally from Maryland’s Eastern Shore, and began boating and fishing at the age of 5, on the beautiful Chesapeake Bay. I moved to the idyllic Florida Keys 30 years ago, and my passion for fishing continues to this day in the tropics. Whether fishing for Tarpon, Bonefish, Snook, Redfish, or Permit , on Fly or Light Tackle, my number one priority is for you to catch fish and enjoy your day. I have been guiding since 1990. 2001 2nd Place Guide Division IGFA Inshore Championship, 2012 Redbone Tournament Guide to Fly Division Champion Angler",
        quote: "TBD"
    },
    {
        name: 'Mike Venezia',
        slug: 'mike-venezia',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        bio: "If you’re looking for an unbelievable day on the water Flats or Fly Fishing in the Backcountry  of the Florida Bay or if you’re interested in the wilderness of Everglades National Park give Captain Mike Venezia a call and we’ll plan your perfect adventure.Islamorada’s back country has some of the best Tarpon, Bonefish, Snook, Redfish, Permit, and Trout fishing in the world. Just a short boat ride to the Everglades National Park you will also find Spanish Mackerel, Black drum, Sharks and Sea Trout. We love our repeat guests and we love to give the seasoned angler an exciting new experience every trip. But, we also welcome the first timers with patience and encouragement. Bringing the kids? We’re happy to customize the day to keep everyone happy. Get on board with Capt Mike for a fun filled day and exeprince the fishing grounds of the Florida Bay and Islamorada.",
        quote: "TBD"
    },
    {
        name: 'Rich Mitchell',
        slug: 'rich-mitchell',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        bio: "A fisherman since the age of two, Captain Rich Mitchell received a degree in marine biology and worked in the seafood industry in Pennsylvania. He has been guiding anglers to fabulous fishing memories in Islamorada for over twenty years. His knowledge and passion for the natural environment in the Keys makes a trip with him a learning experience as well as an adventure. Marvel at wadding birds and dolphins in their natural Everglades habitat while fishing for Snook and Redfish from a shallow water skiff. Enjoy stories of Flagler's railroad and the Keys pioneers as you await the strike of a hungry Tarpon. Take in the magical diversity of life on the flats while stalking the elusive Bonefish in the gin clear waters of Florida Bay.",
        quote: "The Keys can offer the fish of a lifetime when you least expect it. Make sure your fish story has a happy ending!"
    },
    {
        name: 'Mark Gilman',
        slug: 'mark-gilman',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        bio: "I have been a Backcountry fishing guide in the Florida Keys for 17 years. I operate two flats boats, a 16 foot Hells Bay Whipray and an 18 foot Hells Bay Marquesa. I am on the Mercury Pro Staff, Hells Bay Pro Team and ESPN Outdoors ProStaff. I am an experienced guide with the capability of fishing novice Spin fisherman to expert Fly fisherman. With my two boats I have the ability to accommodate any angling needs. I have guided three IGFA World Records, on Bonefish and Permit. I have also guided anglers to 26 Backcountry tournament victories.",
        quote: "TBD"
    },
    {
        name: 'Rich Burson',
        slug: 'rich-burson',
        pic: 'https://placehold.co/250x300',
        backcountry: true,
        offshore: false,
        bio: "Captain Richard Burson is a South Florida Native who has been fishing these waters for over 30 years. Since getting his Captain's License 15 years ago Captain Richard has had the great honor of chartering anglers of all different skill levels. He will customize your trip to fit your skill level and your desired experience. Whether it is stalking the elusive bonefish, catching your delicious dinner or learning about the Florida Keys Ecosystem, Captain Richard would certainly be an excellent choice for all you chartering needs.",
        quote: "TBD"
    },
    {
        name: 'Ross DeMarzo',
        slug: 'ross-demarzo',
        pic: 'https://placehold.co/250x300',
        backcountry: false,
        offshore: true,
        bio: "Capt Ross DeMarzo can lead you to a fun filled of day fishing off Islamorada. Producing many catches of Snapper, Grouper, Sailfish, Mahi …….Highly reviewed 'Catchalottafish' is a 34’ Custom Freeman  fishing charter service. Fishing Offshore, Wrecks, Reef, Swordfish, and Tournaments. Get out there and Catchalotta fish with Capt Ross and his crew.",
        quote: "TBD"
    },
    {
        name: 'Ryan Wentzel',
        slug: 'ryan-wentzel',
        pic: 'https://placehold.co/250x300',
        backcountry: false,
        offshore: true,
        bio: "4-Reel Charters is run by two brothers Capt. Ryan and Capt. Scott Wenzel. They have grown up fishing in the Florida Keys and enjoy sharing their passion for the ocean with their clients. Whether you want to target Mahi Mahi, Sailfish, or anything in between we will always aim to make it a fun and exciting day on the water! We run a custom 34ft Sea Vee with plenty of room for activities. We look forward to showing our clients all the amazing fishing that Islamorada has to offer!",
        quote: "TBD"
    },
    {
        name: 'Hunter Barron',
        slug: 'hunter-barron',
        pic: 'https://placehold.co/250x300',
        backcountry: false,
        offshore: true,
        bio: "Born and Raised in Islamorada, Florida Keys Sportfishing Capital of the World.Hunter's passion for fishing  began when he was very young being raised in the charter fishing industry with his dad Captain Chris Barron of Stray Cat Charters. Acquiring extensive knowledge of both offshore and the backcountry Hunter became very competitive in the professional fishing world. Right out of high school Hunter attained his Captains license in 2006 and started fishing aboard the Catch 22 out of Bud and Mary’s Marina for the Stanczyk Family. His 14 years of employment with the Catch 22 started as a mate and then being promoted to captain. Hunter was featured on the TV fishing show by the The Weather Channel called “Reel Rivals’ aboard the Catch 22 with Capt. Scott Stanczyk. Accredited to his experience Hunter has been very successful on the water with many tournament wins and accomplishments. Charter the 'Endeavor' with Capt Hunter for fantastic  day on the water. Whether it is Hook and Cook or the trophy fish of a lifetime you will have a memorable day aboard the 'Endeavor'",
        quote: "TBD"
    },
    {
        name: 'Matt Davis',
        slug: 'matt-davis',
        pic: 'https://placehold.co/250x300',
        backcountry: false,
        offshore: true,
        bio: "Islamorada offshore charter fishing is among the best anywhere, and can provide the thrill of a lifetime. I, Captain Matt Davis of TAN MAN, offer deepsea fishing at its best on the fertile waters of the Keys, on the comfortable fishing rigged 44′ sportfisherman TAN MAN. Islamorada, the Sportfishing capital of the world, offers a tremendous variety of deep sea and reef fishing options all year, and we target species such as dolphin (mahi-mahi), sailfish, grouper, snapper, wahoo, tuna, cobia, kingfish and amberjack. We welcome families and anglers regardless of their fishing expertise. TAN MAN enjoys taking family charters; there is nothing like spending a day on the water with your loved ones. We are located at the Bud n’ Mary’s Marina in Islamorada at mile marker 79.8 (oceanside) in the Florida Keys. We offer full days, 3/4 days, and half days. TAN MAN is a 44′ Henriques, which are known for their large cockpit allowing for plenty of room to experience all of the aspects that go into a day on the water. To go along with the large cockpit we have a large, air-conditioned salon, which includes a dinette and a comfortable couch to relax on after catching that big one, or, if you just want to get out of the sun. The boat is also rigged with top-of-the-line fishing tackle that is meticulously maintained for reliable performance. She is rigged with the latest safety equipment along with fishing-finding equipment, as well as a GPS full of hot spots.",
        quote: "TBD"
    },
    {
        name: 'Alex Adler',
        slug: 'alex-adler',
        pic: 'https://placehold.co/250x300',
        backcountry: false,
        offshore: true,
        bio: "Capt Alex Adler  fishing aboard the Kalex ,  a 48′ Custom Marine Management hull with Twin Diesel engines. It was built and designed by Alex’s father and himself. Capt. Alex Adler has 35 years of sportfishing experience at Bud N’ Mary’s Marina. He is an innovater of many fishing techniques locally and abroad. He has won many tournaments as a captain, mate, and angler since 1971 to now. In 2013 Capt. Alex was named one of the TOP 50 Captains in Saltwater Sportsman Magazine! He is without question one of the most knowledgable and most experienced captains around, and he always produces fish! Fishing is Alex’s passion, and everyday brings a new experience! We welcome aboard families, unexperienced anglers, children, and professionals as well. As the seasons change we fish a variety of locations including reefs, wrecks, and in the gulfstream. Generally we use light tackle. The Kalex has been featured on Bass Pro shops Outdoor World, Roland Martin, Reel Adventures, TNN, FOX, and ESPN networks. The mates on the Kalex have been fishing with Alex for many years and know how to work as a professional fishing team. Whether you decide to head offshore in pursuit of big game fish, or wish to stay closer to home and catch dinner at the reef or on the wrecks, Capt. Alex  will customize your trip to meet your Florida Keys and Islamorada fishing needs. Don’t be shy about bringing the kids along. Capt. Alex will provide a family-friendly charter fishing environment for anglers of all ages and skill levels. He loves introducing beginners to saltwater fishing, and we take pride in helping children (and adults) catch their first big fish.",
        quote: "TBD"
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
        <Route path="/charters" element={<ChartersPage />} />
        <Route path="/charters/inshore-backcountry" element={<InshoreBackcountryChartersPage />} />
        <Route path="/charters/offshore" element={<OffshoreChartersPage />} />
        <Route path="/charters/eco-enviro-tours" element={<EcoEnviroToursPage />} />
        <Route path="/guides" element={<GuidesPage guidesList={guidesList}/>} />
        <Route path="/guides/:name" element={<GuideDetailsPage guideData={detailPage} setDetailPage={setDetailPage} />}  />
        <Route path="/visit-islamorada" element={<VisitPage />} />
        <Route path="/frequently-asked-questions" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    
    </>
  )
}

export default App
