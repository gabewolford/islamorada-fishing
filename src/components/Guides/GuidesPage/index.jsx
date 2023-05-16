export default function GuidesPage({ guidesList }) {

    return (
        <>
            <div className="mx-auto max-w-7xl pt-24">
                <div className="mx-6 lg:mx-20 mb-16">
                    <h1 className="text-3xl font-medium mb-6">Our Guides</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {guidesList}
                    </div>
                </div>
            </div> 
        </>
    )
}