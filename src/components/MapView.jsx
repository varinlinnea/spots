import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import AddSpotForm from './AddSpotForm';
import '../styles/Modal.css';

export default function MapView({ spots, setSpots }) {
    const mapRef = useRef();
    const mapContainerRef = useRef();

    const [clickedCoords, setClickedCoords] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

    const staticMapUrl = clickedCoords ? `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/pin-s+ff0000(${clickedCoords.lng},${clickedCoords.lat})/${clickedCoords.lng},${clickedCoords.lat},14,0/600x300?access_token=${MAPBOX_TOKEN}`: null;


    useEffect(() => {
        mapboxgl.accessToken = MAPBOX_TOKEN;
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [10.2564, 60.1680],
            zoom: 12,
            style: 'mapbox://styles/mapbox/standard-satellite',
        });
        mapRef.current.on('click', (e) => {
            setClickedCoords(e.lngLat);
            setModalOpen(true);
            console.log(e.lngLat)
        })

        return () => {
            mapRef.current.remove()
        }
    }, []);

    useEffect(() => {
        spots.forEach((spot) => {
        if (spot.longitude && spot.latitude) {
            new mapboxgl.Marker()
          .setLngLat([spot.longitude, spot.latitude])
          .setPopup(new mapboxgl.Popup().setText(spot.spotName || "Unnamed Spot", spot.rating || "No rating"))
          .addTo(mapRef.current);
        } 
        });
    }, [spots])

    return (
        <>
            <div id='map-container' ref={mapContainerRef}/>

            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button onClick={() => setModalOpen(false)}>X</button>
                        <h2>Add new spot</h2>

                        {staticMapUrl && (
                            <img
                                src={staticMapUrl}
                                alt="Spot preview"
                                className="staticMapPreview"
                            />
                        )}

                        <AddSpotForm coords={clickedCoords} setSpots={setSpots}/>
                    </div>
                </div>
            )}
        </>
    );
}