import HeroCard from "../HomeComponents/HeroCard"
import CharterTypes from "../HomeComponents/CharterTypes"
import PhotoLeftInfoCard from "../HomeComponents/PhotoLeftInfoCard"
import PhotoRightInfoCard from "../HomeComponents/PhotoRightInfoCard"
import PartnersSection from "../HomeComponents/PartnersSection"

export default function HomePage() {
    return (
        <>
            <div className="mx-auto max-w-7xl pt-14">
                <HeroCard />
                <CharterTypes />
                <PhotoLeftInfoCard />
                <PhotoRightInfoCard />
                <PartnersSection />
            </div>
        </>
    )
}