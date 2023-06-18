export default function PartnerCard({ partnerData }) {
    let partnerName, partnerPhoto, partnerURL
    if (partnerData) {
        partnerName = <h3 className="text-sm text-center font-bold mt-2">{partnerData.name}</h3>
        partnerPhoto = '../' + partnerData.image
        partnerURL = partnerData.url
    }

    return (
        <>
            <a
                href={partnerURL}
                target="_blank"
                rel="noreferrer"
                className="p-4 hover-grow"
            >
                <img src={partnerPhoto} alt={partnerName} className="mx-auto w-full"/>
                {partnerName}
            </a>
        </>
    )
}