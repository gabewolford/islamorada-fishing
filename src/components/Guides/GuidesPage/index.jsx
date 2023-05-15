export default function GuidesPage({ guidesList }) {

    return (
        <>
            <div className="mx-20">
                <div className="mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {guidesList}
                    </div>
                </div>
                
            </div>
            
        </>
    )
}