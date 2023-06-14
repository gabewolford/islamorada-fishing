export default function GuideFacts({ guideData }) {
    let guideAboutMe, guideBoats, guideDock, guideSpecialty, guideFunFact, guideDaysOff, guidePhoto, guideName
    if (guideData) {
        guideAboutMe = guideData.about_me
        guideBoats = guideData.boats
            .map((boat, i) => {
                return <li key={i} className="boat-list-item">{boat}</li>
            })
        guideDock = guideData.dock
        guideSpecialty = guideData.specialty
        guideFunFact = guideData.fun_fact
        guideDaysOff = guideData.days_off
        guidePhoto = '..' + guideData.featured_pic
        guideName = guideData.name
    }

    return (
        <>
            <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-28">

                <div className="flex flex-col items-start gap-10 order-1 lg:order-0 lg:w-2/3">
                    
                    <div className="flex flex-col items-start gap-2">
                        <h5 className="font-bold text-lg">About me</h5>
                        <p className="text-lg">{guideAboutMe}</p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start gap-6">
                        <div className="flex flex-col gap-6 md:w-1/2">
                            <div className="flex flex-col items-start">
                                <h6 className="font-semibold">Boat</h6>
                                <p>{guideBoats}</p>
                            </div>

                            <div className="flex flex-col items-start">
                                <h6 className="font-semibold">Dock</h6>
                                <p>{guideDock}</p>
                            </div>

                            <div className="flex flex-col items-start">
                                <h6 className="font-semibold">Specialty</h6>
                                <p>{guideSpecialty}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 lg:w-1/2">
                            <div className="flex flex-col items-start">
                                <h6 className="font-semibold">A fun fact...</h6>
                                <p>{guideFunFact}</p>
                            </div>

                            <div className="flex flex-col items-start">
                                <h6 className="font-semibold">On my days off...</h6>
                                <p>{guideDaysOff}</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="order-0 lg:order-1 flex lg:w-1/3">
                    <img src={guidePhoto} alt={guideName} className="object-cover"/>
                </div>
                
            </section>
        </>
    )
}