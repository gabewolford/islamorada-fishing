import './styles.css'
import preline from 'preline'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Nav from '../Nav'
import HomePage from '../HomePage'
import AllChartersPage from '../ChartersPages/AllChartersPage'
import InshoreBackcountryChartersPage from '../ChartersPages/InshoreBackcountryChartersPage'
import OffshoreChartersPage from '../ChartersPages/OffshoreChartersPage'
import EcoEnviroToursPage from '../ChartersPages/EcoEnviroToursPage'
import GuidesPage from '../Guides/GuidesPage'
import GuideCard from '../Guides/GuideCard'
import GuideDetailsPage from '../Guides/GuideDetailsPage'
import ExplorePage from '../ExplorePage'
import WhereToStayPage from '../WhereToStayPage'
import ResortCard from '../WhereToStayComponents/ResortCard'
import FAQPage from '../FAQPage'
import ContactPage from '../ContactPage'
import ContactConfirmationPage from '../ContactConfirmationPage'
import PartnersPage from '../PartnersPage'
import PartnerCard from '../PartnersComponents/PartnerCard'
import NotFoundPage from '../NotFoundPage'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'
import bassProPhoto from '../../assets/partners/basspro.png'
import wwsPhoto from '../../assets/partners/wws-logo.png'
import amaraCayPhoto from '../../assets/partners/amaracay.png'
import caribbeanWatersportsPhoto from '../../assets/partners/caribbean-watersports.png'
import charterBoatAssocPhoto from '../../assets/partners/charterboatassoc.png'
import cheecaPhoto from '../../assets/partners/cheeca-logo.png'
import costaPhoto from '../../assets/partners/costa-sunglasses.png'
import diawaPhoto from '../../assets/partners/diawa.png'
import evergladesCoalitionPhoto from '../../assets/partners/evergladescoalition.png'
import fishForHollyPhoto from '../../assets/partners/fish-for-holly.png'
import floridaBayPhoto from '../../assets/partners/florida-bay-forever.png'
import floridaFishWildlifePhoto from '../../assets/partners/florida-fish-wildlife.png'
import grassyFlatsPhoto from '../../assets/partners/grassyflats.png'
import chamberPhoto from '../../assets/partners/islamorada-chamber.png'
import islamoradaTimesPhoto from '../../assets/partners/islamorada-times.png'
import fishingGuidesAssocPhoto from '../../assets/partners/keysfishingguidesassoc.png'
import mangroveMikesPhoto from '../../assets/partners/mangrove-mikes.png'
import markeysPhoto from '../../assets/partners/markeys-marine.png'
import maverickPhoto from '../../assets/partners/maverick.png'
import mercuryPhoto from '../../assets/partners/mercury-marine.png'
import pennPhoto from '../../assets/partners/penn.png'
import saltwaterSportsmanPhoto from '../../assets/partners/saltwater-sportsman.png'
import strayCatPhoto from '../../assets/partners/straycat-charters.png'
import tarponTrustPhoto from '../../assets/partners/tarpontrust.png'
import upperKeysRotaryPhoto from '../../assets/partners/upper-keys-rotary.png'
import lanceKeenePhoto from '../../assets/captains/lance-keene.png'
import chrisBarronPhoto from '../../assets/captains/chris-barron.png'
import mikeVeneziaPhoto from '../../assets/captains/mike-venezia.png'
import alexAdlerPhoto from '../../assets/captains/alex-adler.png'
import masonBakerPhoto from '../../assets/captains/mason-baker.png'
import richBursonPhoto from '../../assets/captains/rich-burson.png'
import hunterBarronPhoto from '../../assets/captains/hunter-barron.png'
import mattDavisPhoto from '../../assets/captains/matt-davis.png'
import rossDemarzoPhoto from '../../assets/captains/ross-demarzo.png'
import jimFicklingPhoto from '../../assets/captains/jim-fickling.png'
import markGilmanPhoto from '../../assets/captains/mark-gilman.png'
import steveGriswoldPhoto from '../../assets/captains/steve-griswold.png'
import johnGuastavinoPhoto from '../../assets/captains/john-guastavino.png'
import tonyHorsleyPhoto from '../../assets/captains/tony-horsley.png'
import zachJonesPhoto from '../../assets/captains/zach-jones.png'
import steveLavoiePhoto from '../../assets/captains/steve-lavoie.png'
import richMitchellPhoto from '../../assets/captains/rich-mitchell.png'
import drewNobregasPhoto from '../../assets/captains/drew-nobregas.png'
import ryanWentzelPhoto from '../../assets/captains/ryan-wentzel.png'
import amaraCayMainPhoto from '../../assets/resorts/amara-cay-main.png'
import amaraCayLogo from '../../assets/resorts/amara-cay-logo.png'
import cheecaLodgeMainPhoto from '../../assets/resorts/cheeca-lodge-main.png'
import cheecaLodgeLogo from '../../assets/resorts/cheeca-lodge-logo.png'
import playaLargoMainPhoto from '../../assets/resorts/playa-largo-main.png'
import playLargoLogo from '../../assets/resorts/playa-largo-logo.png'
import fisherInnMainPhoto from '../../assets/resorts/fisher-inn-main.png'
import fisherInnLogo from '../../assets/resorts/fisher-inn-logo.png'
import islandsIslamoradaMainPhoto from '../../assets/resorts/islands-islamorada-main.png'
import islandsIslamoradaLogo from '../../assets/resorts/islands-islamorada-logo.png'
import casaMoradaMainPhoto from '../../assets/resorts/casa-morada-main.png'
import casaMoradaLogo from '../../assets/resorts/casa-morada-logo.png'



function App() {
  const [guides, setGuides] = useState([])
  const [partners, setPartners] = useState([])
  const [resorts, setResorts] = useState([])
  const [detailPage, setDetailPage] = useState()

  const allGuides = [
    {
      name: 'Alex Adler',
      slug: 'alex-adler',
      featured_pic: alexAdlerPhoto,
      backcountry: false,
      offshore: true,
      business_name: "the Kalex",
      about_me: "I've been charter fishing as the owner-operator aboard the Kalex out of Islamorada's famed Bud N' Mary's Marina since 1976. Prior to moving to the Keys, I fished out of Bahia Pez Vela Lodge in Costa Rica immediately out of high school and rapidly became known as an innovator in saltwater fishing. Once in the Keys, I learned from some of the best in the business including legendary captains like Allan Starr, Don Gurgulio, Sarge Warner, Cecil Keith, and Jimmy Albright. Harold Adler, my father, was also a major mentor in my fishing career. It wasn’t long after my move to the Keys that I began an impressive series of tournament wins, including winning the 1981 Bimini Blue Marlin Tournament, and twice winning the Cat Cay Tuna Tournament. I have won countless tournaments in the Florida Keys, including the Florida Keys Triple Crown Series and the Florida Keys Gold Cup events, yet I am also an expert at all aspects of Keys fishing, including dolphinfish and reef fishing. Recently I has been selected as a recipient of the IGFA Tommy Gifford.",
      boats: [`48' Custom Marine w/ twin Cummins`],
      dock: "Bud N' Mary's",
      specialty: 'Light tackle, live bait, kite fishing, family fun fishing, specialty charters.',
      fun_fact: "Many celebrities have chartered the Kalex including Dale Earnhardt Sr., Payne Stewart, Andy Garcia, Peter Benchley, and Yoenis Cespedes.",
      days_off: "Boat maintenance, catching bait, resting."
    },
    {
      name: 'Mason Baker',
      slug: 'mason-baker',
      featured_pic: masonBakerPhoto,
      backcountry: true,
      offshore: false,
      business_name: null,
      about_me: "My name is Mason Baker, I am a second generation fishing guide here in islamorada. I am 23 years old and since I got my first boat when I was 11 years old I've spent more time on the water than I've spent on land. I've explored all aspects of what Islamorada has to offer on the water from spearfishing and lobstering to inshore and offshore fishing. My passion lies on the crystal clear flats up and down the Florida Keys chasing bonefish, tarpon and permit. I was lucky to grow up in Islamorada where I learned not only how to fish but how to safely navigate through out the waterways and mangrove islands all over the Florida Keys.",
      boats: [`16' Dolphin Super Skiff w/ 70HP Yamaha`],
      dock: "World Wide Sportsman",
      specialty: 'Fly fishing, sight fishing bonefish, tarpon, permit, snook, and redfish',
      fun_fact: "When I was in high school, I was on the reef yellowtailing with my friend and his uncle. We noticed a capsized boat in the distance. We assisted the family in the water and called the coast guard. We ended up on the news the next week. Half my customers google me and they find the news article instead of my business.",
      days_off: "I'm always on the water. I may be flats fishing on my boat but I may be offshore fishing or diving as well with friends. My goal is always to learn as much as I can about the fishery we have here."
    },
    {
      name: 'Chris Barron',
      slug: 'chris-barron',
      featured_pic: chrisBarronPhoto,
      backcountry: true,
      offshore: true,
      business_name: 'Stray Cat Charters',
      about_me: "Originally from Abington, MA. I came to Islamorada in 1979 and started fishing offshore. After that I decided to buy a skiff and start my own business fishing the backcountry. Fishing is my passion. I have fished many tournaments throughout my time and I am a Mercury Pro Team Guide. Now, my focus and enjoyment comes from giving my customers a quality experience on the water for the best fishing possible. I am married to my wife, Christine, and we have two successful children. We are just a fishing family, we enjoy fishing together whenever we get the chance. A family that fishes together stays together.",
      boats: [`18' Maverick w/ 150HP Mercury`, `24' Everglades`],
      dock: 'World Wide Sportsman',
      specialty: 'Live bait fishing for tarpon and snook',
      fun_fact: "My wife has the same name as me and we adopt Stray Cats hence Stray Cat Charters.",
      days_off: "Besides taking my wife fishing, I really enjoy grilling on my Traeger, smoking fish and preparing feasts for family and friends."
    },
    {
      name: 'Hunter Barron',
      slug: 'hunter-barron',
      featured_pic: hunterBarronPhoto,
      backcountry: false,
      offshore: true,
      business_name: "Endeavor Sportfishing",
      about_me: "Born in Islamorada, my passion for fishing began when I was young. I was raised in the charter fishing industry by my dad Captain Chris Barron of Stray Cat Charters. Acquiring extensive knowledge of both offshore and the backcountry, I became very competitive in the professional fishing world. Right out of high school, I attained my captains license in 2006 and started fishing aboard the Catch 22 out of Bud N' Mary’s Marina. My employment with the Catch 22 started as a mate and then being promoted to captain for the Stanczyk Family. I've found lots of success on the water with many tournament wins and accomplishments like the 2011 IGFA World Championship.",
      boats: [`40' Sportfish w/ SeaKeeper `],
      dock: "Bud N' Mary's",
      specialty: 'Sailfish, mahi, wahoo, snapper, grouper, and a possible marlin to name a few.',
      fun_fact: "We caught 47 sailfish with Gunner Guthrie on the Catch 22 which was the Islamorada Record of 2012.",
      days_off: "Making sushi & wahoo spoons, and cooking on my Traeger grill for friends."
    },
    {
      name: 'Rich Burson',
      slug: 'rich-burson',
      featured_pic: richBursonPhoto,
      backcountry: true,
      offshore: false,
      business_name: "Rufishingyet Charters",
      about_me: "I am a South Florida native who has been fishing the local waters from Biscayne Bay to Islamorada for over 30 years. After obtaining my captain's license, I have been chartering light tackle and fly fishing enthusiasts in the Key Largo area and Everglades National Park.",
      boats: [`Ranger 191 Cayman w/ 150HP Mercury`],
      dock: "Postcard Inn Marina",
      specialty: 'Sightfishing bonefish, permit, snook, redfish, tarpon.',
      fun_fact: "My parents tied me up on the dock in diapers while they fished.",
      days_off: "Spending time with family and kids fishing, snorkeling, wakeboarding."
    },
    {
      name: 'Matt Davis',
      slug: 'matt-davis',
      featured_pic: mattDavisPhoto,
      backcountry: false,
      offshore: true,
      business_name: 'TAN MAN Charters',
      about_me: "I grew up in Key Largo and Islamorada, and have been fishing these local waters my entire life, and professionally for the last 20 years. I have had the privelege of fishing and winning some the most prestigious tournaments in the area, and have been fishing at the legendary Bud N' Mary's Marina for over 15 years.",
      boats: [`44' Henriques Sportfish w/ dual 450HP Cummins`],
      dock: "Bud N' Mary's",
      specialty: 'Sailfish, dolphin, snapper, grouper, king fish, tuna, cobia, amberjack, wahoo, permit, sharks, African pompano, and deep drop species',
      fun_fact: "My wife Lindsay is a Realtor and help you with your home search. I also went to school with Hunter Barron.",
      days_off: "Spending time with my wife and two children, grilling, relaxing with friends."
    },
    {
      name: 'Ross DeMarzo',
      slug: 'ross-demarzo',
      featured_pic: rossDemarzoPhoto,
      backcountry: false,
      offshore: true,
      business_name: "Catchalottafish Charters",
      about_me: "I was born in Philadelphia and have been fishing in Islamorada since 2001. I worked on the Predator at Bud N' Marys Marina until moving to World Wide Sportsman.",
      boats: [`34' Freeman`],
      dock: "World Wide Sportsman",
      specialty: 'Live bait, reef, wrecks, sailfish, mahi, tuna.',
      fun_fact: "N/A",
      days_off: "N/A"
    },
    {
      name: 'Jim Fickling',
      slug: 'jim-fickling',
      featured_pic: jimFicklingPhoto,
      backcountry: true,
      offshore: false,
      business_name: "Can-O-Worms Fishin'",
      about_me: "My father was a Green Beret stationed in Fayetteville, NC and it was the lakes of North Carolina where my passion for fishing began. In my early adult years I moved to Destin, FL and discovered off-shore fishing. My love for that led me to the fabulous Florida Keys. After fishing for many years with respected, local captains, I established Can-O-Worms Fishin’ out of the famous World Wide Sportsman Marina. I've successfully shared my enthusiasm and knowledge of backcountry fishing with many people, from all around the world and of many different skillsets. I enjoy sharing historical knowledge of the Keys and family experiences. I am fortunate enough to not only enjoy skinny-water fishing, but also continue off-shore charter and tournament fishing.",
      boats: [`18' Actioncraft`],
      dock: "World Wide Sportsman",
      specialty: 'Live bait fishing.',
      fun_fact: "I can stand on my head and spit wooden nickels.",
      days_off: "Fishing with my son."
    },
    {
      name: 'Mark Gilman',
      slug: 'mark-gilman',
      featured_pic: markGilmanPhoto,
      backcountry: true,
      offshore: false,
      business_name: "Rufishingyet Charters",
      about_me: "I'm an all-around backcountry guide.",
      boats: [`Ranger 191 Cayman w/ 150HP Mercury`],
      dock: "Postcard Inn Marina",
      specialty: 'Live bait, fly fishing bridges flats.',
      fun_fact: "I manage race horses as my second passion.",
      days_off: "Manage my business."
    },
    {
      name: 'Steve Griswold',
      slug: 'steve-griswold',
      featured_pic: steveGriswoldPhoto,
      backcountry: true,
      offshore: false,
      business_name: null,
      about_me: "I have been fishing in Islamorada since I was a young kid and I have been guide fishing for 26 years.",
      boats: [`24' Pathfinder Bay Boat w/ 300HP Yamaha`],
      dock: "World Wide Sportsman",
      specialty: 'Catching fish and having fun with my clients.',
      fun_fact: "N/A",
      days_off: "Golfing, hiking, working on classic cars."
    },
    {
      name: 'John Guastavino',
      slug: 'john-guastavino',
      featured_pic: johnGuastavinoPhoto,
      backcountry: true,
      offshore: false,
      business_name: 'Pisces Connections Charters',
      about_me: "I was born and raised on the Chesapeake Bay on the Eastern shore of Maryland and have been boating and fishing since I was five years old.",
      boats: [`18' Dolphin Backcountry Skiff w/ 175HP Mercury`],
      dock: "World Wide Sportsman",
      specialty: 'Catching fish and keeping my anglers happy.',
      fun_fact: "I have the same birthdate (same year) as Christine Barron, wife of our venerable Capt. Chris Barron!",
      days_off: "Baitfishing, tending to my boat and fishing gear, cooking, exploring, swimming, walking, playing golf."
    },
    {
      name: 'Tony Horsley',
      slug: 'tony-horsley',
      featured_pic: tonyHorsleyPhoto,
      backcountry: true,
      offshore: false,
      business_name: "Bowed Up Fishing Charters",
      about_me: "I have eighteen years of experience and will guide you through a fishing adventure of a lifetime!",
      boats: [`22' Pathfinder`],
      dock: "World Wide Sportsman",
      specialty: 'Tarpon, snook, redfish, trout, snapper.',
      fun_fact: "I love building and woodworking, deer hunting, and having fun at the bar after work with my friends and clients.",
      days_off: "Boat maintenance, fixing nets and rods."
    },
    {
      name: 'Zach Jones',
      slug: 'zach-jones',
      featured_pic: zachJonesPhoto,
      backcountry: true,
      offshore: false,
      business_name: 'Zoned In Charters',
      about_me: "I have been fishing ever since I was a child. I fell in love with the flats 9 years ago and never looked back. It's the feeling of stalking out the fish we catch that gets me going. I was born in North Carolina, hooking bass, chasing reds, and fishing for trout in the Asheville Mountains. This place definitely stole me away because of its abundance of species and explosive action! I love all types of fishing and welcome all types, and whether you're spinning or fly fishing, I will put you on them.",
      boats: [`Pathfinder 2400`, `Beavertail Elite Skiff`],
      dock: "World Wide Sportsman",
      specialty: 'Backcountry and flats fishing.',
      fun_fact: "I am a saltwater aquarium nerd and a Brazilian jiu-jitsu freak.",
      days_off: "Practicing Brazilian jiu-jitsu, crossfit, or you can catch me throwing the fly and getting rejected by the permit on the flat."
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
      name: 'Steve Lavoie',
      slug: 'steve-lavoie',
      featured_pic: steveLavoiePhoto,
      backcountry: true,
      offshore: false,
      business_name: null,
      about_me: "N/A",
      boats: [`17' Maverick, 70HP`],
      dock: "World Wide Sportsman",
      specialty: 'Sightfishing bonefish, permit, snook, redfish, tarpon.',
      fun_fact: "My son is an excellent baseball player and I enjoy traveling along on his baseball quest.",
      days_off: "Cycling and running with my German Shorthaired Pointers."
    },
    {
      name: 'Rich Mitchell',
      slug: 'rich-mitchell',
      featured_pic: richMitchellPhoto,
      backcountry: true,
      offshore: false,
      business_name: "Ichthyophile Charters",
      about_me: "I have been a fisherman since the age of two. I received a degree in marine biology and worked in the seafood industry in Pennsylvania. I have been guiding anglers to faboluous fishing memories for over 30 years. My knowledge and passion for the natural environment in the Keys makes a trip with me a learning experience as well as an adventure.",
      boats: [`18' Maverick`],
      dock: "Postcard Inn Marina",
      specialty: 'Eco tours and light tackle sportfishing.',
      fun_fact: "Due to my education in biology, I have a fascination with early marine science. I once owned an antique store called 'Ichthyophile', meaning 'Fish Lover'. My house displays hand colored fish prints dating back to the 1700s.",
      days_off: "Relaxing and tending to my gardens."
    },
    {
      name: 'Drew Nobregas',
      slug: 'drew-nobregas',
      featured_pic: drewNobregasPhoto,
      backcountry: true,
      offshore: false,
      business_name: 'Fishy Business Charters',
      about_me: "I am a second generation Islamorada fishing guide and native. After graduating from Florida State Universtiy, I pursued my passion as a full-time fishing guide in 2014. I have extensive knowledge in fly fishing, using artificial lures, and bait fishing all over the world. I have fished in Alaska for halibut and salmon, the Northeast for striper, the Gulf Coast for giant tuna, the Bahamas for blue marlin, Belize for the elusive permit on fly, and a laundry list of many other places to sharpen my skills as a guide.",
      boats: [`22' Pathfinder w/ 200HP Yamaha`],
      dock: "World Wide Sportsman",
      specialty: 'Family fun fishing.',
      fun_fact: "I was a member of the Florida State Fishing Team and competed for a year.",
      days_off: "Sneaking away to the golf course."
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
    {
      name: 'Ryan Wentzel',
      slug: 'ryan-wentzel',
      featured_pic: ryanWentzelPhoto,
      backcountry: false,
      offshore: true,
      business_name: "4reel Charters",
      about_me: "I was born and raised in South Florida and have been fishing in the Keys as long as I can remember. After I graduated from high school I started deck handing on boats in Venice, Louisiana. The intense grind and long stretches of fishing they do in Venice taught me the work ethic needed to be a charter fisherman, but it also instilled in me an even deeper passion for the ocean. Working on those boats is what inspired me to take on the challenge of starting my own business in Islamorada where my brother and I grew up fishing. My goal is to work hard to put people on fish and be able to show our clients the best day possible every day!",
      boats: [`2021 37' Sea Vee w/ Triple Mercury 300s`],
      dock: "World Wide Sportsman",
      specialty: 'Offshore, reef/wreck fishing.',
      fun_fact: "I'm a lefty and a dog lover.",
      days_off: "Sitting at Fish Co at the end of the day with the captains talking about our fishing."
    },
  ]

  const allPartners = [
    {
      name: 'Amara Cay Resort',
      image: amaraCayPhoto,
      url: 'https://www.islamoradaresortcollection.com/amara-cay-resort'
    },
    {
      name: 'Bass Pro Shops',
      image: bassProPhoto,
      url: 'https://www.basspro.com/'
    },
    {
      name: "Bonefish & Tarpon Trust",
      image: tarponTrustPhoto,
      url: 'https://www.bonefishtarpontrust.org/'
    },
    {
      name: 'Caribbean Watersports',
      image: caribbeanWatersportsPhoto,
      url: 'https://www.caribbeanwatersports.com/'
    },
    {
      name: 'Cheeca Lodge & Spa',
      image: cheecaPhoto,
      url: 'https://www.cheeca.com/'
    },
    {
      name: 'Costa Del Mar Sunglasses',
      image: costaPhoto,
      url: 'https://www.costadelmar.com/'
    },
    {
      name: 'Diawa',
      image: diawaPhoto,
      url: 'https://daiwa.us/'
    },
    {
      name: 'Everglades Coalition',
      image: evergladesCoalitionPhoto,
      url: 'https://www.evergladescoalition.org/'
    },
    {
      name: 'Fish For Holly',
      image: fishForHollyPhoto,
      url: 'http://fishforholly.com/'
    },
    {
      name: 'Florida Bay Forever',
      image: floridaBayPhoto,
      url: 'https://www.floridabayforever.org/'
    },
    {
      name: 'Florida Fish & Wildlife Commission',
      image: floridaFishWildlifePhoto,
      url: 'https://myfwc.com/'
    },
    {
      name: 'Florida Keys Fishing Guides Association',
      image: fishingGuidesAssocPhoto,
      url: 'https://fkfga.org/'
    },
    {
      name: 'Grassy Flats Resort & Beach Club',
      image: grassyFlatsPhoto,
      url: 'https://www.grassyflats.com/'
    },
    {
      name: 'Islamorada Charter Boat Association',
      image: charterBoatAssocPhoto,
      url: 'https://www.islamoradacharterboatassociation.org/'
    },
    {
      name: 'Islamorada Chamber of Commerce',
      image: chamberPhoto,
      url: 'https://islamoradachamber.com/'
    },
    {
      name: 'Islamorada Times',
      image: islamoradaTimesPhoto,
      url: 'https://www.islamoradatimes.com/'
    },
    {
      name: "Mangrove Mike's",
      image: mangroveMikesPhoto,
      url: 'https://www.mangrovemikes.com/'
    },
    {
      name: "Markey Marine Service",
      image: markeysPhoto,
      url: 'https://www.markeymarine.com/'
    },
    {
      name: "Maverick Boats",
      image: maverickPhoto,
      url: 'https://www.maverickboats.com/'
    },
    {
      name: "Mercury Marine",
      image: mercuryPhoto,
      url: 'https://www.mercurymarine.com/'
    },
    {
      name: "Penn Fishing Gear",
      image: pennPhoto,
      url: 'https://www.pennfishing.com/'
    },
    {
      name: "Salt Water Sportsman",
      image: saltwaterSportsmanPhoto,
      url: 'https://www.saltwatersportsman.com/'
    },
    {
      name: "Stray Cat Charters",
      image: strayCatPhoto,
      url: 'https://www.straycatscharters.com/'
    },
    {
      name: "Upper Keys Rotary Club",
      image: upperKeysRotaryPhoto,
      url: 'https://keysrotary.org/'
    },
    {
      name: 'World Wide Sportsman',
      image: wwsPhoto,
      url: 'https://www.basspro.com/'
    },
  ]

  const allResorts = [
    {
      name: 'Amara Cay',
      blurb: 'Amara Cay Resort is anchored in the laid-back style and carefree atmosphere that makes Islamorada the Sport Fishing Capital of the World.',
      main_photo: amaraCayMainPhoto,
      logo: amaraCayLogo,
      url: 'https://www.islamoradaresortcollection.com/amara-cay-resort',
    },
    {
      name: 'Cheeca Lodge',
      blurb: 'Cheeca Lodge & Spa has been an exclusive hideaway for celebrities, business leaders and U.S. Presidents for over 70 years.',
      main_photo: cheecaLodgeMainPhoto,
      logo: cheecaLodgeLogo,
      url: 'https://www.cheeca.com/',
    },
    {
      name: 'Playa Largo',
      blurb: 'Located in Key Largo, FL, Playa Largo Resort & Spa, Autograph Collection offers 178 luxury rooms, suites, bungalows, and a beach house.',
      main_photo: playaLargoMainPhoto,
      logo: playLargoLogo,
      url: 'https://www.playalargoresort.com/',
    },
    {
      name: 'Fisher Inn',
      blurb: 'The Fisher Inn Resort & Marina offers guests a modern, stylish, and comfortable place to stay while visiting Islamorada.',
      main_photo: fisherInnMainPhoto,
      logo: fisherInnLogo,
      url: 'https://www.fisherinnresort.com/',
    },
    {
      name: 'The Islands of Islamorada',
      blurb: 'Seamlessly weaves the allure of tropical beauty with familiar luxurious comforts, creating a captivating experience for the whole family.',
      main_photo: islandsIslamoradaMainPhoto,
      logo: islandsIslamoradaLogo,
      url: 'https://www.theislandsofislamorada.com/',
    },
    {
      name: 'Casa Morada',
      blurb: 'Casa Morada is an upscale sixteen suite privately owned hotel inspired by the informal character of the Caribbean.',
      main_photo: casaMoradaMainPhoto,
      logo: casaMoradaLogo,
      url: 'https://casamorada.com/',
    },
  ]

  useEffect(() => {
    setGuides(allGuides)
    setPartners(allPartners)
    setResorts(allResorts)
    const cards = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting)
            if (entry.isIntersecting) {
                observer.unobserve(entry.target)
            }
        })
    },
    {
        threshold: .25,
    }
    )

    cards.forEach(card => {
        observer.observe(card)
    })
  }, [])

  let guidesList 
  if (allGuides.length > 0) {
    guidesList = guides
      .map((guide, i) => <GuideCard key={i} guideData={guide} setDetailPage={setDetailPage}/>)
  }

  let partnersList
  if (allPartners.length > 0) {
    partnersList = partners
      .map((partner, i) => <PartnerCard key={i} partnerData={partner} />)
  }

  let resortsList
  if (allResorts.length > 0) {
    resortsList = resorts
      .map((resort, i) => <ResortCard key={i} resortData={resort} />)
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
            <Route path="/guides" element={<GuidesPage guidesList={guidesList} />} />
            <Route path="/guides/:slug" element={<GuideDetailsPage guideData={detailPage} setDetailPage={setDetailPage} guides={guides}/>}  />
            <Route path="/explore-islamorada" element={<ExplorePage />} />
            <Route path="/explore-islamorada/stay" element={<WhereToStayPage resortsList={resortsList} />} />
            <Route path="/frequently-asked-questions" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact/confirmation" element={<ContactConfirmationPage />} />
            <Route path="/partners" element={<PartnersPage partnersList={partnersList} />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    </>
  )
}

export default App
