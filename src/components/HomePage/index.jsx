import HeroCard from "../HomeComponents/HeroCard"
import CharterTypes from "../HomeComponents/CharterTypes"
import PhotoLeftInfoCard from "../HomeComponents/PhotoLeftInfoCard"
import PhotoRightInfoCard from "../HomeComponents/PhotoRightInfoCard"
import PartnersSection from "../HomeComponents/PartnersSection"
import { Helmet } from "react-helmet"

export default function HomePage() {
    return (
        <>
            <div className="mx-auto max-w-7xl pt-24">
                <Helmet>
                    <title>Islamorada Fishing Guides and Charters | Florida Keys</title>
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