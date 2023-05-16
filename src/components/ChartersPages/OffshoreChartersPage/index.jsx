import Header from "../../CharterComponents/OffshorePage/Header"
import PhotoLeftCard1 from "../../CharterComponents/OffshorePage/PhotoLeftCard1"
import PhotoRightCard2 from "../../CharterComponents/OffshorePage/PhotoRightCard2"


export default function OffshoreChartersPage() {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-24">
                <div className="mx-6 lg:mx-20 mb-0 md:mb-8">
                    <Header />
                    <PhotoLeftCard1 />
                    <PhotoRightCard2 />
                </div>
            </div>
        </>
    )      
}