import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MapView({ spots }) {
    const mapRef = useRef();
    const mapContainerRef = useRef();

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoidmFyaW5saW5uZWEiLCJhIjoiY21laDVlb3NhMDRuMzJscjRidGNwa202cCJ9.Lbg2FLMJBBRI6cvoy31RFA'
        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            center: [10.2564, 60.1680],
            zoom: 12,
            style: 'mapbox://styles/mapbox/standard-satellite',
        });

        return () => {
            mapRef.current.remove()
        }
    }, []);

    useEffect(() => {
        spots.forEach((spot) => {
        if (spot.longitude && spot.latitude) {
            new mapboxgl.Marker()
          .setLngLat([spot.longitude, spot.latitude])
          .setPopup(new mapboxgl.Popup().setText(spot.name || "Unnamed Spot"))
          .addTo(mapRef.current);
        } 
        });
    }, [spots])

    return (
        <>
            <div id='map-container' ref={mapContainerRef}/>
        </>
    );
}