import MapView from './MapView';
import ListView from './ListView';

export default function MainContent({ currentContentView, spots, setSpots }) {

    return (
        <>
            {currentContentView === 'mapView' ?
            <MapView spots={spots} setSpots={setSpots} /> : <ListView spots={spots} />}
        </>
    )
}