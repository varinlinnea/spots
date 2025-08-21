import supabase from '../supabase';

export default function AddSpotForm({ coords }) {
    return (
        <>
            <form className="addSpotForm">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name"/>
                <label htmlFor="rating">Rating</label>
                <input type="number" id="rating" name="rating"/>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description"/>
                <button type="submit">Add spot</button>
            </form>
        </>
    );
}