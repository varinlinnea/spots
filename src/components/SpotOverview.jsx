

export default function SpotOverview({ spots }) {
    return (
        <div id="overview-container">
            {spots.forEach((spot) => {
                <div class="overview-spot-card">
                    <h3>{spot.spotName}</h3>
                    
                </div>
            })}
        </div>
    )
}