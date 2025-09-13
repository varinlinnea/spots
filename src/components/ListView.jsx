export default function ListView({ spots }) {

    console.log(spots);

    return (
        <div>list view
            {spots.map((spot) => (
                <div className="spotCard" key={spot.id}>
                    <h3>{spot.spotName}</h3>
                    <img src={spot.image_url} alt="spot image" />
                    <p>{spot.description}</p>
                </div>
            ))}
        </div>
    );
}