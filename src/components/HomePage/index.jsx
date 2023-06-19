import HeroCard from "../HomeComponents/HeroCard"
import CharterTypes from "../HomeComponents/CharterTypes"
import PhotoLeftInfoCard from "../HomeComponents/PhotoLeftInfoCard"
import PhotoRightInfoCard from "../HomeComponents/PhotoRightInfoCard"
import PartnersSection from "../HomeComponents/PartnersSection"
import { Helmet } from "react-helmet"
import 'animate.css';

export default function HomePage() {
    return (
        <>
            <div className="mx-auto max-w-7xl pt-4 md:pt-24 animate__animated animate__fadeIn">
                <Helmet>
                    <title>Islamorada Fishing Guides & Charters | Florida Keys</title>
                </Helmet>
                <HeroCard />
                <CharterTypes />
                <PhotoLeftInfoCard />
                <PhotoRightInfoCard />
                <PartnersSection />
            </div>
        </>
    )
}