import { useEffect, useState } from 'react'
import supabase from './supabase';
import NavBar from './components/NavBar';
import MapView from './components/MapView';

import './styles/App.css';

 function App() {

  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function getSpots() {
      const { data, error } = await supabase.from('spots').select();
      if (error) {
        console.log(error);
        return;
      }
      console.log('data:', data);

      if (data) {
        setSpots(data);
      }
    }
    getSpots();
  }, []);

  // // function for adding spot
  // const addSpot = async (spotName, rating, description, longitude, latitude) => {
  //   const { error } = await supabase
  //   .from('spots')
  //   .insert([{
  //     spotName,
  //     rating,
  //     longitude,
  //     latitude
  //   }]);
  //   if (error) {
  //     console.log(error);
  //   }
  // };


  return (
    <>
      <NavBar />
      <MapView spots={spots} setSpots={setSpots} />
    </>
  );
}

export default App