export default function GuidesPage({ guidesList }) {

    return (
        <>
            <div className="mx-20 pt-36">
                <div className="mx-auto">
                    <div className="mb-4">
                        <h3 className='text-xl text-blue-500'>Our Guides</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {guidesList}
                    </div>
                </div>
                
            </div>
            
        </>
    )
}