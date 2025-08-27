import { useState } from 'react';
import supabase from '../supabase';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function AddSpotForm({ coords, setSpots, setModalOpen }) {

    const addSpot = async (spotData) => {
        const { data, error } = await supabase
        .from('spots')
        .insert(spotData)
        .select()
        .single()
        
        if (error) {
        console.log(error);
        return
        }
        console.log(data);

        setSpots((prevSpots) => [...prevSpots, data])
    };

    const [spotData, setSpotData] = useState({
        spotName: '',
        rating: 0,
        description: '',
        longitude: coords.lng,
        latitude: coords.lat
    });

    const handleChange = (e) => {
        const { name, type, value } = e.target;
        setSpotData((prevSpotData) => ({
            ...prevSpotData,
            [name]: type === 'number' ? (value === '' ? '' : Number(value)) : value,
        }))
        console.log(spotData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addSpot(spotData);
        setSpotData({});
        setModalOpen(false);
    }


    return (
        <>
            <form className="addSpotForm" onSubmit={handleSubmit}>
                <label htmlFor="spotName">Name</label>
                <input type="text" id="spotName" name="spotName" onChange={handleChange}/>
                <label htmlFor="rating">Rating</label>
                <input type="number" id="rating" name="rating" onChange={handleChange}/>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" onChange={handleChange}/>
                <button type="submit">Add spot</button>
            </form>
        </>
    );
}